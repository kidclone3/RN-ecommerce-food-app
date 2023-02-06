import EncryptedStorage from "react-native-encrypted-storage";
import axios from "axios";
import {API_URL} from "../index";

export const checkToken = async () => {
    let code = 0;
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        console.warn('Not login yet');
        return 1;
    }
    await axios.get(`${API_URL}/api/users/me`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    }).then(response => {
        // Token is valid
        console.warn("Success")
        const {username} = response.data;
        EncryptedStorage.setItem('username', username);
    }).catch(error => {
        // Token is invalid
        EncryptedStorage.removeItem('jwt');
        const message = error.response.data.error.message;
        // Missing or invalid credentials => token is invalid
        if (message === 'Missing or invalid credentials') {
            console.warn('Missing or invalid credentials')
            code = 2;
        }
    })
    return code;
}
export default checkToken;