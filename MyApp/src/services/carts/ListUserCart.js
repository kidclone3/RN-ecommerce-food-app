import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const listUserCart = async () => {
    let data = [];
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        console.warn('Not login yet');
        data.error = 'Not login yet';
    }
    try {
        const response = await axios.get(`${API_URL}/api/users/me/cart`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return { error };
    }
};
export default listUserCart;
