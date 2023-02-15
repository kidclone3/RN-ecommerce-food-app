import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const detailUserOrder = async (id, start, limit) => {
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) data.error = 'Not logged in';
    let data = [];
    await axios
        .get(`${API_URL}/api/users/me/receipts/` + id, {
            headers: {
                Authorization: jwt ? `Bearer ${jwt}` : '',
            },
            params: {
                pagination: {
                    start: start,
                    limit: limit,
                },
            },
        })
        .then((response) => {
            data = response.data;
        })
        .catch((error) => {
            console.log(
                'Error when get order detail: ' +
                    id +
                    ' ' +
                    error.response.data.error.message
            );
        });
    return data;
};
export default detailUserOrder;
