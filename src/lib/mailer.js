import nodemailer from 'nodemailer';
import 'dotenv/config';

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
});

export const send = async ({ to, subject = "Test subject", data = {} }) => {
    if (process.env.MAIL_DRIVER !== "smtp") {
        console.log("Mail driver not smtp.", "Mail driver: ", process.env.MAIL_DRIVER);
        console.log("Data:", data);
        return;
    }

    let options = {
        from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
        to,
        subject,
        text: JSON.stringify(data)
    };

    try {
        let sent = await transporter.sendMail(options);
        console.log('mailer', sent.response);
    } catch (error) {
        console.log(error);
    }
}