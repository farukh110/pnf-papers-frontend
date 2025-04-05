import axios from "axios";
import { BACKEND } from "../../utilities/base_url";

const getAllBlogs = async () => {

    try {

        const response = await axios.get(`${BACKEND}/blog`);
        return response.data

    } catch (error) {

        throw new Error('Error: ', error);
    }
};

const getBlog = async (blogId) => {

    try {

        const response = await axios.get(`${BACKEND}/blog/${blogId}`);
        return response.data

    } catch (error) {

        throw new Error('Error: ', error);
    }
};

export const blogService = {

    getAllBlogs,
    getBlog
}; 