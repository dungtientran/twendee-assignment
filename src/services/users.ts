import axiosConfig from "."
import { IPage } from "./model"


export const getUsers = (page: string | number  , results: string | number  ) => {
    return axiosConfig.get<IPage>(`/api/?page=${page}&results=${results}`)
}