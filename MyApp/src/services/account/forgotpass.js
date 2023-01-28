import axios from "axios";
import {API_URL} from "../index";
import {validateError} from "./index";

export const forgotpass = async (email) => {
    axios.post(`${API_URL}/api/auth/forgot-password`, {
        email: email,
    }).then(() => {
        // Reset password request successful
        console.warn("Success")
        return 0;
    }).catch(error => {
        // Reset password request failed
        const errors = validateError(error)
        if (errors.length > 0) {
            return 1;
        }
    })
}