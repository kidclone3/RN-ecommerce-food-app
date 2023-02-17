import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';
import React from 'react';

export const listUserCart = async () => {
    let data = [];
    const jwt = await EncryptedStorage.getItem('jwt');

    if (!jwt) {
        console.log('Not login yet');
        data.error = 'Not login yet';
    }
    console.log(jwt);
    const res = await axios
        .get(`${API_URL}/api/users/me/cart`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        .catch((error) => {
            console.warn('Error: ' + error);
        });
    console.log('response ' + JSON.stringify(res));
    console.log('data ' + JSON.stringify(res.data));
    return await res.data;
    // return res.data;
};
export default listUserCart;
