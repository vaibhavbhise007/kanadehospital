const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env' });
const { google } = require("googleapis");

const {
    OAUTH_USER,
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_REFRESH_TOKEN,
    OAUTH_REDERICT_URI
} = process.env;

// Function to create a transporter for sending emails
async function createTransporter() {
    try {
        const oauth2Client = new google.auth.OAuth2(
            OAUTH_CLIENT_ID,
            OAUTH_CLIENT_SECRET,
            OAUTH_REDERICT_URI
        );

        oauth2Client.setCredentials({ refresh_token: OAUTH_REFRESH_TOKEN });

        const accessToken = await oauth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: OAUTH_USER,
                clientId: OAUTH_CLIENT_ID,
                clientSecret: OAUTH_CLIENT_SECRET,
                refreshToken: OAUTH_REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        transporter.verify((err, success) => {
            if (err) {
                console.error("Transporter verification error:", err);
                return;
            }
            console.log(`=== Server is ready to take messages: ${success} ===`);
        });

        return transporter;
    } catch (err) {
        console.error("Error creating email transporter:", err);
        throw err; // Rethrow the error to handle it in the caller
    }
}

// Function to send an email using the provided transporter
async function sendEmail(emailOptions) {
    try {
        let emailTransporter = await createTransporter();
        await emailTransporter.sendMail(emailOptions);
    } catch (err) {
        console.error("Error sending email:", err);
        throw err; // Rethrow the error to handle it in the caller
    }
};

module.exports = sendEmail;