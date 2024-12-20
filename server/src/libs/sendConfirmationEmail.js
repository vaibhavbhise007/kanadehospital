const sendEmail = require("../configs/nodemailer");

async function sendConfirmationEmail(url, email) {
  try {
    const emailOptions = {
      from: `" E-commerce App "<${process.env.OAUTH_USER}> `,
      to: email,
      subject: "Email Account Confirmation",
      html: `<div style="max-width:600px; margin: 0 auto;">
        <h1 style="text-align: center; color: #5f6368; padding-bottom: 20px;">Welcome!</h1>
        <p style="margin: 0;font-size: 16px;">We are happy to welcome you. There's just one more step for you to start using the application. Simply press the button below, and your account will be automatically verified.</p>
        <div style="width: fit-content;margin: 40px auto;">
            <a href="${url}" target="_blank" style=" font-size: 16px; font-family: Helvetica,Arial,sans-serif;color: #222;cursor:pointer;text-decoration: none;padding: 10px 20px;border: 2px solid #202124;background: #fcba1c;font-weight: 600;display: inline-block;"> CONFIRM ACCOUNT</a>
        </div>
        <p style="  margin-bottom:0;   font-size: 16px;">If it doesn't work, please copy and paste the following link into your browser</p>
        <p style="text-align:center; margin:10px 0;  font-size: 16px;"><a href="#" target="_blank" style="color: #FFA73B;">${url}</a></p>
        <p style="  font-size: 16px;">If you have any questions, please send them to this email address, and we will be happy to assist you.</p>
        <div>
        <p style="font-size: 16px; padding: 30px 0; background: #ffd5a1;color: #5f6368;text-align: center;">
            Greetings, the E-commerce App App team.</p>`,
    };
    await sendEmail(emailOptions);
  } catch (err) {
    console.log(err);
  }
}

module.exports = sendConfirmationEmail;
