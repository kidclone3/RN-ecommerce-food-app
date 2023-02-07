import {API_URL} from '../index';
import axios from 'axios';

export const getCategories = async (start=0, limit=25) => {
    let data = [];
    await
        axios.get(`${API_URL}/api/categories`, {
            params: {
                populate: {
                    icon: {
                        fields: "url"
                    }
                },
                pagination: {
                    start: start,
                    limit: limit
                }
            }
        })
            .then(response => {
                console.warn('Products retrieved');
                data = response.data.data
            })
            .catch(error => {
                console.warn('Error retrieving products: ' + error.response.data.error.message);
                data.error=error
            });
    return data;
}
export default getCategories;