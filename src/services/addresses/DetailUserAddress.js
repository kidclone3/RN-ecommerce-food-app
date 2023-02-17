import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const detailUserAddress = async (id) => {
    let object = {};
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        console.warn('Not login yet');
        object.error = 'Not login yet';
    }
    await axios
        .get(`${API_URL}/api/users/me/addresses/` + id, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        .then((response) => {
            console.warn('Address retrieved');
            object = response.data;
        })
        .catch((error) => {
            console.warn('Error: ' + error);
            object.error = error;
        });
    return code;
};
export default detailUserAddress;
