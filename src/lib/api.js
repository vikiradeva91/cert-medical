import { get } from 'svelte/store';
import { getStores } from "$app/stores";
import axios from "axios";
import { api } from "../config";

export const client = axios.create({
    baseURL: `${api.url}`
})

// This should be called on component initialization, otherwise the session is won't be available
export const getAuthClient = () => {
    const { session } = getStores();

    const { token } = get(session);

    return axios.create({
        baseURL: `${api.url}/dashboard`,
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}

export const preloadClient = (token) => {
    return axios.create({
        baseURL: `${api.url}/dashboard`,
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}