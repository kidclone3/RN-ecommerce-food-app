import axios from "axios";
import {API_URL} from "../index";
import EncryptedStorage from "react-native-encrypted-storage";

export const deleteUserCart = async (id) => {
    let code = 0;
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        console.warn('Not login yet');
        code = 1
    }
    await axios.delete(`${API_URL}/api/carts/` + id, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    }).then(response => {
        console.warn("Cart deleted");
        code = 0
    }).catch(error => {
        console.warn("Error: " + error);
        code = 1
    })
    return code;
}
export default deleteUserCart