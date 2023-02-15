import { API_URL } from '../index';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import { validateError } from './index';

export const login = async (identifier, password) => {
    let code = 0;
    await axios
        .post(`${API_URL}/api/auth/local`, {
            identifier: identifier,
            password: password,
        })
        .then(async (response) => {
            console.warn('Login successful');
            const { user, jwt } = response.data;
            await EncryptedStorage.setItem('username', user.username);
            await EncryptedStorage.setItem('jwt', jwt);
            // Login successful
        })
        .catch((error) => {
            const errors = validateError(error);
            if (errors.length > 0) {
                code = 1;
            }
            const message = error.response.data.error.message;
            // Invalid identifier or password => wrong credentials
            if (message === 'Invalid identifier or password') {
                console.warn('Invalid identifier or password');
                code = 2;
            }
            // Your account email is not confirmed => email not confirmed
            if (message === 'Your account email is not confirmed') {
                console.warn('Your account email is not confirmed');
                code = 3;
            }
            // Login failed
        });
    return code;
};
export default login;
