import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const listUserCart = async () => {
    let data = {};
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        console.warn('Not login yet');
        data.error = 'Not login yet';
    }
    await axios
        .get(`${API_URL}/api/users/me/cart`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        .then((response) => {
            console.warn('Cart retrieved');
            data = response.data;
        })
        .catch((error) => {
            console.warn('Error: ' + error);
            data.error = error;
        });
    return data;
};
export default listUserCart;
