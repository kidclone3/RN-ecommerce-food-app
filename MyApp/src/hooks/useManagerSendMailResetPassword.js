import React from 'react';
import { API_URL } from '../services';
import { validateEmail } from '../constants/validate';

export const useManagerSendMailResetPassword = () => {
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [isProgressing, setProgressing] = React.useState(false);

    const submit = async (cb) => {
        setProgressing(true);
        if (!validateEmail(email)) {
            setEmailError('Email format is wrong!');
            cb(null);
            setProgressing(false);
            return;
        } else {
            setEmailError('');
        }
        const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
            body: JSON.stringify({
                email,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        if (response.ok) {
            let json = await response.json();
            cb(json);
        } else {
            cb(null);
        }
        setProgressing(false);
    };

    return {
        email,
        setEmail,
        isProgressing,
        submit,
        emailError,
    };
};
