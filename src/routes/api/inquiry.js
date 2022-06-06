import { send } from "$lib/mailer"
import 'dotenv/config'

export const post = async ({ request }) => {

    const { name, email, phone, body } = await request.json();

    console.log({ name, email, phone, body });

    // TODO: input validation
    await send({
        subject: `Inquiry from: ${email}`,
        to: process.env.MAIL_FROM_ADDRESS,
        data: { name, email, phone, body }
    })
}