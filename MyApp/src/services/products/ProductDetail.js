import axios from "axios";
import { API_URL } from "../index";
export const productDetail = async (id) => {
    let data = {};
    await axios.get(`${API_URL}/api/products/${id}`, {
        params: {
            populate: {
                categories: {
                    fields: "name"
                },
                image: {
                    fields: "url"
                }
            },
            filters: {
                show: {
                    $eq: true
                }
            }
        }
    }).then(response => {
        console.warn(`Product ${id} retrieved`);
        data = response.data.data;
    }).catch(error => {
        console.warn("Error retrieving products: " + error.response.data.error.message);
        data.error = error
    });
    return data;
}
export default productDetail;