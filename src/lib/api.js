import { get } from 'svelte/store';
import { getStores } from "$app/stores";
import axios from "axios";
import config from "../config";

export const client = axios.create({
    baseURL: `${config.api.host}`
})

// This should be called on component initialization, otherwise the session is won't be available
export const getAuthClient = () => {
    const { session } = getStores();

    const { token } = get(session);

    return axios.create({
        baseURL: `${config.api.host}/dashboard`,
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}