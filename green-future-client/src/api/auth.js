import axios from "axios";

const baseURL = import.meta.env.VITE_APP_URL_FE;

export const login = async(data) => {
    try{
        const {
            email,
            password
        } = data;
        const response = await axios.post(`${baseURL}/auth/access-token`,{
            email,
            password
        })
        const token = response.data.data.accessToken;
        if(token){
            localStorage.setItem("accessToken",token);
            return response.data
        }
        
    }
    catch (error){
        console.error(error);
        throw new Error('Đã có lỗi khi đăng nhập!!')
    }
}