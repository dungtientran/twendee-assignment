import axiosConfig from "."

export const getAllUser = (page?: string , results?: string ) => {
    return axiosConfig.get(`/api/?page=${page || 1}&results=${results|| 10}`)
}