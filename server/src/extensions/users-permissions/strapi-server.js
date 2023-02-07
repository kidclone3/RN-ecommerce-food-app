const _ = require("lodash");
const rdStr = require("randomstring");
const bcrypt = require("bcrypt");
const utils = require("@strapi/utils");
const createHttpError = require("http-errors");
const { getService } = require("./utils/index");
const {
  validateForgotPasswordBody,
  validateResetPasswordBody,
} = require("./validation/auth");

const { sanitize } = utils;

const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel("plugin::users-permissions.user");

  return sanitize.contentAPI.output(user, userSchema, { auth });
};

module.exports = (plugin) => {
  plugin.controllers.auth.forgotPassword = async (ctx) => {
    const { email } = await validateForgotPasswordBody(ctx.request.body);

    const pluginStore = await strapi.store({
      type: "plugin",
      name: "users-permissions",
    });

    const emailSettings = await pluginStore.get({ key: "email" });

    // Find the user by email.
    const user = await strapi
      .query("plugin::users-permissions.user")
      .findOne({ where: { email: email.toLowerCase() } });

    if (!user || user.blocked) {
      return ctx.send({ ok: true });
    }

    // Generate random token.
    const userInfo = await sanitizeUser(user, ctx);

    const CODE = rdStr.generate({
      charset: "numeric",
      length: 6,
    });

    const resetPasswordTokenSalt = bcrypt.genSaltSync(10);

    const resetPasswordToken = bcrypt.hashSync(CODE, resetPasswordTokenSalt);

    const resetPasswordSettings = _.get(
      emailSettings,
      "reset_password.options",
      {}
    );
    const emailBody = await getService("users-permissions").template(
      resetPasswordSettings.message,
      {
        CODE,
      }
    );

    const emailObject = await getService("users-permissions").template(
      resetPasswordSettings.object,
      {
        USER: userInfo,
      }
    );

    const emailToSend = {
      to: user.email,
      from:
        resetPasswordSettings.from.email || resetPasswordSettings.from.name
          ? `${resetPasswordSettings.from.name} <${resetPasswordSettings.from.email}>`
          : undefined,
      replyTo: resetPasswordSettings.response_email,
      subject: emailObject,
      text: emailBody,
      html: emailBody,
    };

    // NOTE: Update the user before sending the email so an Admin can generate the link if the email fails
    await getService("user").edit(user.id, {
      resetPasswordToken: `${resetPasswordToken}|${Date.now()}`,
    });

    // Send an email to the user.
    await strapi.plugin("email").service("email").send(emailToSend);

    ctx.send({ ok: true });
  };

  plugin.controllers.auth.resetPassword = async (ctx) => {
    const { password, passwordConfirmation, code, email } =
      await validateResetPasswordBody(ctx.request.body);

    if (password !== passwordConfirmation) {
      throw createHttpError(400, "Passwords do not match");
    }

    const user = await strapi
      .query("plugin::users-permissions.user")
      .findOne({ where: { email } });

    if (!user) {
      throw createHttpError(400, "Not found user!");
    }

    if (!user.resetPasswordToken) {
      throw createHttpError(400, "No session!");
    }

    const [resetPasswordToken, timeStamp] = user.resetPasswordToken.split("|");

    if (Number(timeStamp) + 60000 * 5 < Date.now()) {
      throw createHttpError(400, "Session is expired!");
    }

    const codeCompare = bcrypt.compareSync(code, resetPasswordToken);

    if (!codeCompare) {
      throw createHttpError(400, "Code is wrong!");
    }

    await getService("user").edit(user.id, {
      resetPasswordToken: null,
      password,
    });

    // Update the user.
    ctx.send({
      jwt: getService("jwt").issue({ id: user.id }),
      user: await sanitizeUser(user, ctx),
    });
  };

  return plugin;
};
