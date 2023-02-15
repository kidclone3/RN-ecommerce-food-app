import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const detailUserCart = async (id) => {
    let data = {};
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        data.error = 'Not login yet';
    }
    await axios
        .get(`${API_URL}/api/carts/` + id, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        .then((response) => {
            console.warn('Address created');
            data = response.data;
        })
        .catch((error) => {
            console.warn('Error: ' + error);
            data.error = error;
        });
    return data;
};
export default detailUserCart;
