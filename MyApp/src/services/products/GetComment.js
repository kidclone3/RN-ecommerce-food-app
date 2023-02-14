import axios from "axios";
import {API_URL} from "../index";
import EncryptedStorage from "react-native-encrypted-storage";

export const getComment = async (slug,start=0) => {
    const jwt = await EncryptedStorage.getItem('jwt');
    let data = {};
    await axios.get(`${API_URL}/api/ratings/reviews/` + slug, {
        headers: {
            "Authorization": jwt ? `Bearer ${jwt}` : "",
        },
        params:{
            start:start,
        }
    }).then(response => {
        console.warn("Success")
        data = response.data;
    }).catch(error => {
        console.warn("Error retrieving products: " + error.response.data.error.message);
        data.error = error
    })
    return data
    // eg: let product = await productDetail("2");
    //     console.warn(await getComment(product.attributes.slug));
}
export default getComment;