const { yup, validateYupSchema } = require('@strapi/utils');

const forgotPasswordBody = yup.object({
    email: yup.string().required().email(),
});

const resetPasswordBody = yup.object({
    code: yup.string().required().length(6),
    password: yup.string().required().min(6),
    passwordConfirmation: yup.string().required().min(6),
    email: yup.string().required().email(),
});

module.exports = {
    validateForgotPasswordBody: validateYupSchema(forgotPasswordBody),
    validateResetPasswordBody: validateYupSchema(resetPasswordBody),
};
