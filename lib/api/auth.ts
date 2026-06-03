import axiosInstance from "./axios-instance";
import { API } from "./endpoints";

export const register = async (data: any) => {
    try{
        const response = await axiosInstance.post(API.AUTH.REGISTER, data);
        return response.data;
        // response.data -> response ko body
    }catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Registration failed'
        );
    }
}