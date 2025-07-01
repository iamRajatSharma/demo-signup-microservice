const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendWelcomeEmail = async ({ email, name }) => {
    try {
        await transporter.sendMail({
            from: `"MicroService-Signup-App " <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Welcome to MyApp!",
            html: `<h2>Hello ${name},</h2><p>Thanks for registering with MyApp!</p>`,
        });
        console.log(`Email sent to ${email}`);
    } catch (error) {
        console.error("Failed to send email:", error);
    }
};

module.exports = { sendWelcomeEmail };
