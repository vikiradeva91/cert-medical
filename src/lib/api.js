import axios from "axios";
import config from "../config";
import { getCookie } from "../lib/cookie"

export let api = axios.create({
    baseURL: config.api.url
});

// const token = (process.browser) ? getCookie('token') : '';

// export let authApi = axios.create({
//     baseURL: config.api.url,
//     headers: {
//         authorization: `Bearer ${token}`
//     }
// });

// export let preloadAuthApi = (token) => {
//     return axios.create({
//         baseURL: config.api.url,
//         headers: {
//             authorization: `Bearer ${token}`
//         }
//     });
// }
