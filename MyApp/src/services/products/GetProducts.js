import { API_URL } from '../index';
import axios from 'axios';

export const getProducts = async (start = 0, limit = 25) => {
    let data = {};
    const res = await axios
        .get(`${API_URL}/api/products`, {
            params: {
                populate: {
                    categories: {
                        filter: 'name',
                    },
                    image: {
                        fields: 'url',
                    },
                },
                filters: {
                    show: {
                        $eq: true,
                    },
                },
                pagination: {
                    start: start,
                    limit: limit,
                },
            },
        })
        .catch((error) => {
            console.warn(
                'Error retrieving products: ' +
                    error.response.data.error.message
            );
            data.error = error;
        });
    return await res.data;
};
export default getProducts;
