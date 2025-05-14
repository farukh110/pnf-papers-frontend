import axios from "axios";
import { BACKEND, config } from "../../utilities/base_url";

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

const getUserWishlist = async () => {

    try {

        const response = await axios.get(`${BACKEND}/user/wishlist`, config);

        if (response.data) {
            return response.data;
        }

    } catch (error) {

        console.error('Error during wishlist:', error);
        throw new Error(error.response?.data?.message || 'Wishlist data failed to load');
    }
};

const addToCart = async (cartData) => {

    const response = await axios.post(`${BACKEND}/user/cart`, cartData, config);

    if (response?.data) {
        return response?.data
    }
}

const getCart = async () => {

    const response = await axios.get(`${BACKEND}/user/cart`, config);

    if (response?.data) {
        return response?.data
    }
}

const removeProductFromCart = async (cartItemId) => {

    const response = await axios.delete(`${BACKEND}/user/delete-product-cart/${cartItemId}`, config);

    if (response?.data) {
        return response?.data
    }
}

const updateProductCart = async (cartDetail) => {

    const response = await axios.put(`${BACKEND}/user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, config);

    if (response?.data) {
        return response?.data
    }
}

const userService = {
    registerUser,
    loginUser,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductCart
};

export default userService;

