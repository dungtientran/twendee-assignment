import axiosConfig from "."
import { IPage } from "./model"


export const getUsers = async (page: string | number, results: string | number, gender?: string) => {
    try {
        const { data } = await axiosConfig.get<IPage>(`/api/?page=${page}&results=${results}&gender=${gender}`)
        return data
    } catch (err) {
        console.log(err);
    }

}