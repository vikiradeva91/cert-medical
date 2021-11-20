import { app } from "../config";

const getCookie = (name) => {
    let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

const setCookie = (name, value, daysToExpire) => {
    let date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; path=/; domain=${app.domain} ;expires=${date.toGMTString()}`;
}

const removeCookie = (name) => {
    document.cookie = `${name}=; path=/; domain=${app.domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export { getCookie, setCookie, removeCookie };