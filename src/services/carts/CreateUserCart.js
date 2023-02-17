import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const createUserCart = async (product, quantity) => {
    let code = 0;
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        return 1;
    }
    await axios
        .post(
            `${API_URL}/api/carts`,
            {
                product: product,
                quantity: quantity,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        )
        .then((response) => {
            console.warn(
                'Cart added ' + 'product: ' + product + ' quantity: ' + quantity
            );
            code = 0;
        })
        .catch((error) => {
            console.warn('Error: ' + error);
            code = 1;
        });
    return code;
};
export default createUserCart;
