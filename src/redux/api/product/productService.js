import axios from "axios";
import { BACKEND, config } from "../../utilities/base_url";

const getAllProducts = async () => {

    try {
        const response = await axios.get(`${BACKEND}/product`);

        console.log('products response: ', response);

        return response.data;

    } catch (error) {
        throw new Error('Error: ', error);
    }
};

const getProduct = async (productId) => {

    const response = await axios.get(`${BACKEND}/product/${productId}`, config);
    return response.data;
}

const productService = {
    getAllProducts,
    getProduct
};

export default productService;
