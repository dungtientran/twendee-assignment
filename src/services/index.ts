import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: 'https://randomuser.me'
})

export default axiosConfig