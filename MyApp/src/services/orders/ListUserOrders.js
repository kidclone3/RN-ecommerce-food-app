import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const listUserOrder = async (status, start = 0, limit = 25) => {
    const jwt = await EncryptedStorage.getItem('jwt');
    let data = {};
    if (!jwt) data.error = 'Not logged in';
    await axios
        .get(`${API_URL}/api/users/me/receipts/`, {
            headers: {
                Authorization: jwt ? `Bearer ${jwt}` : '',
            },
            params: {
                pagination: {
                    start: start,
                    limit: limit,
                },
                filters: {
                    status: {
                        $eq: status,
                    },
                },
            },
        })
        .then((response) => {
            console.warn('Success');
            data = response.data;
        })
        .catch((error) => {
            console.warn(
                'Error when get order detail: ' +
                    error.response.data.error.message
            );
            data.error = error;
        });
    return data;
};
export default listUserOrder;
