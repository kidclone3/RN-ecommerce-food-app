import axios from "axios";
import {API_URL} from "../index";
import EncryptedStorage from "react-native-encrypted-storage";

export const deleteReview = async (id) => {
    let code = 0;
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        console.warn('Not login yet');
        return 1;
    }
    await axios.delete(`${API_URL}/api/ratings/comment/`+id, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    }).then(response => {
        console.warn('Delete comment succeed');
        code = 0;
    }).catch(error => {
        console.warn('Error: ' + error.response.data.error.message);
        code = 1
    })
    return code;
}
export default deleteReview;