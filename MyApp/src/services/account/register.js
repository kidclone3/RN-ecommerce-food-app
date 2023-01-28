import EncryptedStorage from "react-native-encrypted-storage";
import axios from "axios";
import {API_URL} from "../index";
import {validateError} from "./index";

export const register = async (username,password,email) => {
    axios.post(`${API_URL}/api/auth/local/register`, {
        username: username,
        password: password,
        email: email,
    }).then(async response => {
        console.warn(response.data);
        const {user, jwt} = response.data;
        await EncryptedStorage.setItem('username', user.username);
        await EncryptedStorage.setItem('jwt', jwt);
        // register successful
        return 0;
    }).catch(error => {
        // Validation error => invalid input
        const errors = validateError(error)
        if (errors.length > 0) {
            return 1;
        }
        const message = error.response.data.error.message
        // Email or Username are already taken => existed account
        if (message === 'Email or Username are already taken') {
            console.warn('Email or Username are already taken')
            return 2;
        }
        // Login failed
    })
}