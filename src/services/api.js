import axios from "axios";

export const api = axios.create({
    baseURL: 'https://devburguer-api-1.onrender.com'
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