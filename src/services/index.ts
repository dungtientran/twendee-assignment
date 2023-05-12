import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: 'https://randomuser.me',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosConfig