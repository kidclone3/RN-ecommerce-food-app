export const validateError = (error) => {
    let errors = [];
    if (error.response.data.error.name === 'ValidationError') {
        const e = error.response.data.error.details?.errors;
        for ( let i = 0; i < e.length; i++ ) {
            console.warn(e[i].message)
            errors.push(e[i].message);
        }
        return errors;
    }
    return 0;
}