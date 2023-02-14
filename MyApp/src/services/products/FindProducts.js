import {API_URL} from '../index';
import axios from 'axios';

export const findProducts = async (name,start=0, limit=25) => {
    let data = [];
    await
        axios.get(`${API_URL}/api/products`, {
            params: {
                populate: {
                    categories: {
                        filter: "name"
                    },
                    image: {
                        fields: "url"
                    }
                },
                filters: {
                    show: {
                        $eq: true
                    },
                    name:{
                        $contains:name
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
export default findProducts;