import {API_URL} from '../index';
import axios from 'axios';

export const getProductsByCategory = async (categoryName, start = 0, limit = 25) => {
    let data = [];
    await
        axios.get(`${API_URL}/api/products`, {
            params: {
                populate: {
                    categories: {
                        filter: {
                            name: {
                                $eq: categoryName
                            }
                        }
                    },
                    image: {
                        fields: "url"
                    }
                },
                filters: {
                    show: {
                        $eq: true
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
                data.error = error
            });
    return data;
    // eg: console.warn(await getProductsByCategory( await (categoriesDetail(1)).name))
}
export default getProductsByCategory;