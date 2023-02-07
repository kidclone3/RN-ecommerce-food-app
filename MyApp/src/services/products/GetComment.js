import axios from "axios";
import {API_URL} from "../index";
import EncryptedStorage from "react-native-encrypted-storage";

export const getComment = async (slug) => {
    const jwt = await EncryptedStorage.getItem('jwt');
    let data = [];
    await axios.get(`${API_URL}/api/ratings/reviews/` + slug, {
        headers: {
            "Authorization": jwt ? `Bearer ${jwt}` : "",
        }
    }).then(response => {
        console.warn("Success")
        data = response.data;
    }).catch(error => {
        console.warn("Error retrieving products: " + error);
        data = error.response.data.error.message
    })
    return data
    // eg: let product = await productDetail("2");
    //     console.warn(await getComment(product.attributes.slug));
}
export default getComment;