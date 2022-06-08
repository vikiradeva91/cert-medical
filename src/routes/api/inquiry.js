import validator from 'validator';
import { send } from "$lib/mailer"
import 'dotenv/config'

export const post = async ({ request }) => {

    const { name, email, phone, body, terms } = await request.json();

    let errors = {};

    console.log({ name, email, phone, body });
    if (!name || validator.isEmpty(name)) {
        errors.name = { message: "Name field is required." }
    }

    if (!email || !validator.isEmail(email)) {
        errors.email = { message: "Valid email is required." }
    }

    if (!phone || validator.isEmpty(phone)) {
        errors.phone = { message: "Phone number is required." }
    }

    if (!body || validator.isEmpty(body)) {
        errors.body = { message: "Message is required." }
    }

    if (terms === undefined || !terms) {
        errors.terms = { message: "You must agree with the Terms and conditions." }
    }

    if (Object.keys(errors).length) {
        return {
            status: 400,
            body: { errors }
        };
    }

    send({
        subject: `Inquiry from: ${email}`,
        to: process.env.MAIL_FROM_ADDRESS,
        data: { name, email, phone, body }
    });

    return {
        status: 200
    };
}