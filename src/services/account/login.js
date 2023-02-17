import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';
export const login = async (identifier, password) => {
    const response = await fetch(`${API_URL}/api/auth/local`, {
        body: JSON.stringify({
            identifier: identifier,
            password: password,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });

};
export default login;
