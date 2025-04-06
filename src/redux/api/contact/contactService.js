import axios from "axios";
import { BACKEND } from "../../utilities/base_url";

const sendQuery = async (data) => {

    try {
        const response = await axios.post(`${BACKEND}/enquiry`, data);

        return response.data;

    } catch (error) {
        throw new Error('Error: ', error);
    }
};

const contactService = {
    sendQuery
};

export default contactService;
