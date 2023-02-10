"use strict";

// * Config email for reset password & account confirmation email
const initEmails = async ({ pluginStore }) => {
  const value = {
    reset_password: {
      display: "Email.template.reset_password",
      icon: "sync",
      options: {
        from: {
          name: "SE2022 noreply",
          email: "noreply@se2022",
        },
        response_email: "",
        object: "Reset password",
        message: `<p>We heard that you lost your password. Sorry about that!</p>
<p>But don’t worry! You can use the following link to reset your password:</p>
<p><strong><%= CODE %></strong></p>
<p>Thanks.</p>`,
      },
    },
    email_confirmation: {
      display: "Email.template.email_confirmation",
      icon: "check-square",
      options: {
        from: {
          name: "SE2022 noreply",
          email: "noreply@se2022",
        },
        response_email: "",
        object: "Account Verification",
        message: `<p>Thank you for registering!</p>

              <p>You have to confirm your email address. Please click on this <a href="<%= URL %>?confirmation=<%= CODE %>">link</a> to verify your account.</p>
              
              <p>Cheers!</p>`,
      },
    },
  };

  await pluginStore.set({ key: "email", value });
};

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const pluginStore = strapi.store({
      type: "plugin",
      name: "users-permissions",
    });
    
    await initEmails({
      pluginStore,
    });
  },
};
