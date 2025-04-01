import axios from "axios";
import { BACKEND } from "../../utilities/base_url";

const getTokenFromLocalStorage = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null;

console.log('getTokenFromLocalStorage: ', getTokenFromLocalStorage);

// const config = {

//     headers: {
//         Authorization: `Bearer ${getTokenFromLocalStorage?.token}`,
//         Accept: "application/json"
//     }
// };

const registerUser = async (userData) => {

    try {

        const response = axios.post(`${BACKEND}/user/register`, userData);

        return response.data;

    } catch (error) {
        console.error('Error during register user:', error);
        throw new Error(error.response?.data?.message || 'Register User failed');
    }
};

const loginUser = async (userData) => {

    try {
        const response = await axios.post(`${BACKEND}/user/login`, userData);

        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data));
        }

        return response.data;

    } catch (error) {
        console.error('Error during login:', error);
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

const userService = {
    registerUser,
    loginUser
};

export default userService;

