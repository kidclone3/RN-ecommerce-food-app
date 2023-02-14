import axios from "axios";
import {API_URL} from "../index";
import EncryptedStorage from "react-native-encrypted-storage";

export const updateUserAddress = async (id,name,phone,address) => {
    let code = 0;
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        console.warn('Not login yet');
        return 1;
    }
    await axios.put(`${API_URL}/api/users/me/addresses/`+id,{
        name:name,
        phone:phone,
        address:address
    }, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    }).then(response => {
        console.warn("Address updated");
        code = 0
    }).catch(error => {
        console.warn("Error: " + error);
        code = 1;
    })
    return code;
}
export default updateUserAddress