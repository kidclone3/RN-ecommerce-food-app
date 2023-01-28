module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 465),
        auth: {
          user: env('SMTP_USERNAME', 'email@gmail.com'),
          pass: env('SMTP_PASSWORD', 'password'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_USERNAME', 'email@gmail.com'),
        defaultReplyTo: env('SMTP_USERNAME', 'email@gmail.com'),
      },
    },
  },
  // ...
});
