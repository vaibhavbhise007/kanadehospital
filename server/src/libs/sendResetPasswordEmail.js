const sendEmail = require("../configs/nodemailer");

async function sendResetPasswordEmail(url, email) {
  try {
    const emailOptions = {
      from: `"E-commerce App" <${process.env.OAUTH_USER}>`,
      to: email,
      subject: "Set a New Password",
      html: `
      <div style="max-width: 600px; margin: 0 auto;">
        <h1 style="text-align: center; color: #5f6368; padding-bottom: 20px;">Reset New Password</h1>
        <p style="margin: 0; font-size: 16px;">
          Just a few more steps left for you to set your new password. Simply press the button below, and you will be redirected to a form to enter your new password.
        </p>
        <div style="width: fit-content; margin: 40px auto;">
          <a href="${url}" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #222; cursor: pointer; text-decoration: none; padding: 10px 20px; border: 2px solid #202124; background: #fcba1c; font-weight: 600; display: inline-block;">
            Change Password
          </a>
        </div>
        <p style="margin-bottom: 0; font-size: 16px;">
          If it doesn't work, please copy and paste the following link into your browser:
        </p>
        <p style="text-align: center; margin: 10px 0; font-size: 16px;">
          <a href="${url}" target="_blank" style="color: #FFA73B;">${url}</a>
        </p>
      </div>
      `,
    };
    await sendEmail(emailOptions);
    console.log(`Reset password email sent to ${email}`);
  } catch (err) {
    console.error("Error sending reset password email:", err.message);
  }
};

module.exports = sendResetPasswordEmail;