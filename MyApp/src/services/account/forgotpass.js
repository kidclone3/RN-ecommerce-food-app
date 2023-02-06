import axios from "axios";
import {API_URL} from "../index";
import {validateError} from "./index";

export const forgotpass = async (email) => {
    let code = 0;
    await axios.post(`${API_URL}/api/auth/forgot-password`, {
        email: email,
    }).then(() => {
        // Reset password request successful
        console.warn("Success")
    }).catch(error => {
        // Reset password request failed
        const errors = validateError(error)
        if (errors.length > 0) {
            code = 1;
        }
    })
    return code;
}
export default forgotpass;