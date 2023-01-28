import axios from 'axios';
import {API_URL} from '../index';
import {validateError} from './index';

export const resetPass = async (code, password, passwordConfirmation) => {
    if (password !== passwordConfirmation) {
        console.warn('Passwords do not match');
        return 1;
    }
    axios
        .post(`${API_URL}/api/auth/reset-password`, {
            code: code,
            password: password,
            passwordConfirmation: password,
        })
        .then(() => {
            // Reset password successful
            console.warn('Success');
            return 0;
        })
        .catch(error => {
            // Reset password failed
            const errors = validateError(error);
            if (errors.length > 0) {
                return 2;
            }
            if (error.response.data.error.name === 'Incorrect code provided') {
                console.warn(`Wrong reset password code`);
                return 3;
            }
        });
}