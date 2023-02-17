import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const cancelUserOrder = async (id) => {
    const jwt = await EncryptedStorage.getItem('jwt');
    let code = 0;
    if (!jwt) return 1;
    await axios
        .put(
            `${API_URL}/api/users/me/receipts/` + id,
            {},
            {
                headers: {
                    Authorization: jwt ? `Bearer ${jwt}` : '',
                },
            }
        )
        .then((response) => {
            console.warn('Success');
            code = 0;
        })
        .catch((error) => {
            console.warn(
                'Error when cancel order: ' + error.response.data.error.message
            );
            code = 1;
        });
    return code;
};
export default cancelUserOrder;
