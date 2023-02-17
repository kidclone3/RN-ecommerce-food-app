import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';
import React from 'react';

export const detailUserCart = async (id) => {
    let data = {};
    const [jwt, setJwt] = React.useState(null);
    async () => {
        setJwt(await EncryptedStorage.getItem('jwt'));
    };
    if (!jwt) {
        data.error = 'Not login yet';
    }
    const res = await axios
        .get(`${API_URL}/api/carts/` + id, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        .catch((error) => {
            console.warn('Error: ' + error + data.error);
        });
    return await res.data;
};
export default detailUserCart;
