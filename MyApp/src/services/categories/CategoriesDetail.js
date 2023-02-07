import axios from "axios";
import {API_URL} from "../index";
export const categoryDetail = async (id) => {
    let data = {};
    await axios.get(`${API_URL}/api/categories/${id}`, {
        params: {
            populate: {
                image: {
                    fields: "url"
                }
            },
        }
    }).then(response => {
        console.warn("Product retrieved");
        data = response.data.data;
    }).catch(error => {
        console.warn("Error retrieving products: " + error);
    });
    return data;
}
export default categoryDetail;