import axios from "axios";
import { BACKEND } from "../../utilities/base_url";

const registerUser = async (userData) => {

    try {

        const response = axios.post(`${BACKEND}/user/register`, userData);

        return response.data;

    } catch (error) {
        console.error('Error during register user:', error);
        throw new Error(error.response?.data?.message || 'Register User failed');
    }
};

const userService = {
    registerUser
};

export default userService;

