import React from 'react';
import { API_URL } from '../services';

export const useManagerResetPassword = ({ email }) => {
    const [code, setCode] = React.useState('');
    const [codeError, setCodeError] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [passwordRetype, setPasswordRetype] = React.useState('');
    const [passwordRetypeError, setPasswordRetypeError] = React.useState('');
    const [isProgressing, setProgressing] = React.useState(false);

    const submit = async (cb) => {
        setProgressing(true);
        let isValid = true;
        if (password.length < 6) {
            setPasswordError('Password format required length is 6 digit!');
            isValid = false;
        } else {
            setPasswordError('');
        }
        if (code.length !== 6) {
            setCodeError('Code format is wrong!');
            isValid = false;
        } else {
            setCodeError('');
        }
        if (passwordRetype !== password || !passwordRetype) {
            setPasswordRetypeError('Password retype is not match!');
            isValid = false;
        } else if (!passwordRetype) {
            setPasswordRetypeError('Password is required!');
            isValid = false;
        } else {
            setPasswordRetypeError('');
        }
        if (!isValid) {
            cb(null);
            setProgressing(false);
            return;
        }
        const response = await fetch(`${API_URL}/api/auth/reset-password`, {
            body: JSON.stringify({
                email,
                password,
                code,
                passwordConfirmation: passwordRetype,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        console.log(response.status);
        if (response.ok) {
            let json = await response.json();
            cb(json);
        } else {
            setCodeError('Code is wrong!');
            cb(null);
        }
        setProgressing(false);
    };

    return {
        code,
        setCode,
        codeError,
        password,
        setPassword,
        passwordError,
        passwordRetype,
        setPasswordRetype,
        passwordRetypeError,
        isProgressing,
        submit,
    };
};
