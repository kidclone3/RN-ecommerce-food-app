import axios from "axios";
import { API_URL } from "../index";
import EncryptedStorage from "react-native-encrypted-storage";

export const detailUserOrder = async (id,start,limit) => {
    const jwt = await EncryptedStorage.getItem('jwt');
    let data = {};
    if (!jwt)
        data.error="Not logged in";
    await axios.get(`${API_URL}/api/users/me/receipts/` + id, {
        headers: {
            "Authorization": jwt ? `Bearer ${jwt}` : "",
        },
        params: {
            pagination:{
                start:start,
                limit:limit
            }
        }
    }).then(response => {
        console.warn("Success")
        data = response.data;
    }).catch(error => {
        console.warn("Error when get order detail: " + error.response.data.error.message);
        data.error = error
    })
    return data
}
export default detailUserOrder;