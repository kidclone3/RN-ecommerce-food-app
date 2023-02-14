import axios from "axios";
import {API_URL} from "../index";
import EncryptedStorage from "react-native-encrypted-storage";

export const listUserAddress = async () => {
    let object={}
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        object.error='Not login yet';
    }
    await axios.get(`${API_URL}/api/users/me/addresses`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    }).then(response => {
        console.warn("Address retrieved");
        object = response.data;
    }).catch(error => {
        console.warn("Error: " + error);
        object=error
    })
    return object;
}
export default listUserAddress