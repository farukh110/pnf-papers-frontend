import axios from "axios";
import { BACKEND, config } from "../../utilities/base_url";

// const getAllProducts = async (data) => {

//     try {

//         console.log('filter sort: ', data);

//         const response = await axios.get(`${BACKEND}/product?${data?.brand?`brand=${data?.brand}&&`:""}${data?.tag?`tags=${data?.tag}&&`:""}${data?.category?`category=${data?.category}&&`:""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`);

//         if (response.data) {

//             return response.data;
//         }

//     } catch (error) {
//         throw new Error('Error: ', error);
//     }
// };

/* eslint-disable */
const getAllProducts = async (data) => {

    try {
        console.log('filter sort: ', data);

        const filters = {};

        if (data?.brand) {
            filters.brand = { value: data.brand, matchMode: 'equals' };
        }

        if (data?.category) {
            filters.category = { value: data.category, matchMode: 'equals' };
        }

        if (data?.tag) {
            filters.tags = { value: data.tag, matchMode: 'equals' };
        }

        if (data?.minPrice) {
            filters.price = { value: data.minPrice, matchMode: 'greaterThanOrEqual' };
        }

        if (data?.maxPrice) {
            filters.price = {
                ...filters.price,
                matchMode: 'lessThanOrEqual',
                value: data.maxPrice
            };
        }

        const queryParams = new URLSearchParams({
            filters: JSON.stringify(filters),
            page: "1",
            limit: "50",
            ...(data?.sort && {
                sortBy: data.sort.replace("-", ""),
                sortOrder: data.sort.startsWith("-") ? "desc" : "asc",
            }),
        });

        const response = await axios.get(`${BACKEND}/product?${queryParams.toString()}`);

        return response.data;
    } catch (error) {
        throw error;
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

const addRating = async (data) => {

    try {

        const response = await axios.put(`${BACKEND}/product/rating`, data, config);
        return response.data;

    } catch (error) {
        throw new Error('Error: ', error);
    }
}

const productService = {
    getAllProducts,
    getProduct,
    addToWishlist,
    addRating
};

export default productService;
