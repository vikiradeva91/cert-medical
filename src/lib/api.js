import axios from "axios";
import { app } from "../config";

export let api = axios.create({
    baseURL: `${app.host}/api`
})

export let dashboard = axios.create({
    baseURL: `${app.host}/api/dashboard`
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
