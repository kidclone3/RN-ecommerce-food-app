import axios from 'axios';
import {API_URL} from '../index';
import {validateError} from './index';

export const resetPass = async (code, password, passwordConfirmation) => {
    let returnCode = 0;
    if (password !== passwordConfirmation) {
        console.warn('Passwords do not match');
        return 1;
    }
    await axios
        .post(`${API_URL}/api/auth/reset-password`, {
            code: code,
            password: password,
            passwordConfirmation: password,
        })
        .then(() => {
            // Reset password successful
            console.warn('Success');
        })
        .catch(error => {
            // Reset password failed
            const errors = validateError(error);
            if (errors.length > 0) {
                returnCode = 2;
            }
            if (error.response.data.error.name === 'Incorrect code provided') {
                console.warn(`Wrong reset password code`);
                returnCode = 3;
            }
        });
    return returnCode;
}
export default resetPass;