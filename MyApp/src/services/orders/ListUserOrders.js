import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const listUserOrder = async (status, start, limit) => {
    const jwt = await EncryptedStorage.getItem('jwt');
    let data = {};
    if (!jwt) data.error = 'Not logged in';
    const res = await axios
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
        // .then((response) => {
        //     // console.log('Success');
        //     data = response.data;
        //     // console.log(`Bearer ${jwt}`);
        //     // console.log(data);
        //     // console.
        // })
        .catch((error) => {
            console.warn(
                'Error when get list order: ' +
                    error.response.data.error.message
            );
        });
    console.log('response ' + JSON.stringify(res));
    return await res.data;
};
export default listUserOrder;
