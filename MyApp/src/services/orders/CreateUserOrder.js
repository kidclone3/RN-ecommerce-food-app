import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const createUserOrder = async (item, address, phone, note) => {
    const jwt = await EncryptedStorage.getItem('jwt');
    let code = 0;
    if (!jwt) return 1;
    await axios
        .post(
            `${API_URL}/api/users/me/receipts`,
            {
                item: item,
                address: address,
                phone: phone,
                note: note,
            },
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
                'Error when create order: ' + error.response.data.error.message
            );
            code = 1;
        });
    return code;

    // eg for buy now: console.log(await createUserCart(1,1))
    //     let id = (await listUserCart())[0][0].id
    //     console.log(await createUserOrder([id],"334nt","0123456789","giao toi"))
};
export default createUserOrder;
