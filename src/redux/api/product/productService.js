import axios from "axios";
import { BACKEND, config } from "../../utilities/base_url";

const getAllProducts = async () => {

    try {
        const response = await axios.get(`${BACKEND}/product`);

        return response.data;

    } catch (error) {
        throw new Error('Error: ', error);
    }
};

const getProduct = async (productId) => {

    const response = await axios.get(`${BACKEND}/product/${productId}`);
    return response.data;
}

const addToWishlist = async (prodId) => {

    try {

        const response = await axios.put(`${BACKEND}/product/wishlist`, { prodId }, config);
        return response.data;

    } catch (error) {
        throw new Error('Error: ', error);
    }
}

const productService = {
    getAllProducts,
    getProduct,
    addToWishlist
};

export default productService;
