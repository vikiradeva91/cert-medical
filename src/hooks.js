import cookie from 'cookie';
import jwt from "jsonwebtoken";

export async function handle({ event, resolve }) {
    const cookies = cookie.parse(event.request.headers.get("cookie") || '');

    if (!cookies.token) {
        return resolve(event);
    }

    try {
        const decoded = jwt.decode(cookies.token);

        event.locals.token = cookies.token;
        event.locals.user = decoded;

        return resolve(event);
    } catch (err) {
        console.log("hooks - jwt error", err);
        return resolve(event);
    }

}

export function getSession(request) {
    const { token, user } = request.locals;

    return { token, user };
}