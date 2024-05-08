import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const userLogin = async (user) => {
    const respond = await axios.post(`${base_url}user/login`,user);
    if (respond.data) {
        localStorage.setItem("customer", JSON.stringify(respond.data));
    }
    return respond.data;
}

const createUser = async (user) => {
    const respond = await axios.post(`${base_url}user/register`,user);
    return respond.data;
}

const userService ={
    userLogin,
    createUser
}

export default userService