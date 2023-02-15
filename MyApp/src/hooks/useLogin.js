const { API_URL } = require('../services');
import React from 'react';
import { validateEmail } from '../constants/validate';
import EncryptedStorage from 'react-native-encrypted-storage';

export const useLogin = () => {
    const [progressing, setProgressing] = React.useState(false);
    const [loginError, setLoginError] = React.useState('');
    const [identifier, setIdentifier] = React.useState('');
    const [identifierError, setIdentifierError] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');

    const submit = async (cb) => {
        setProgressing(true);

        let isValid = true;

        if (!validateEmail(identifier)) {
            isValid = false;
            setIdentifierError('Email format is wrong!');
        } else {
            setIdentifierError('');
        }

        if (password?.trim().length < 6) {
            isValid = false;
            setPasswordError('Password require length more than 6 character!');
        } else {
            setPasswordError('');
        }

        if (!isValid) {
            setProgressing(false);
            return;
        }

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

        let user = null;
        if (response.ok) {
            const { jwt, user: _user } = await response.json();
            console.log(_user);
            await EncryptedStorage.setItem('jwt', jwt);
            await EncryptedStorage.setItem('username', _user.username);
            user = _user;
        } else {
            const json = await response.json();
            setLoginError(json?.error?.message);
        }
        setProgressing(false);
        cb(user);
    };

    return {
        loginError,
        progressing,
        setIdentifier,
        identifierError,
        setPassword,
        passwordError,
        submit,
        identifier,
        password,
    };
};
