import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001"
});

api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('devburguer:userData');

    if (userData) {
        const token = JSON.parse(userData).token;

        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
    }

    return config;
});