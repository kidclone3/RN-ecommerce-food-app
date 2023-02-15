export const validateError = (error) => {
    let errors = [];
    if (error.response.data.error.name === 'ValidationError') {
        const e = error.response.data.error.details?.errors;
        if (e)
            for (let i = 0; i < e.length; i++) {
                console.warn(e[i].message);
                errors.push(e[i].message);
            }
    }
    return errors;
};
import checkToken from './checkToken';
import forgotpass from './forgotpass';
import login from './login';
import logout from './logout';
import register from './register';
import resetpass from './resetpass';
export { checkToken, forgotpass, login, logout, register, resetpass };
