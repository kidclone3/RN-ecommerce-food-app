import axios from "axios";
import {API_URL} from "../index";

export const storeAddress = async () => {
    let data = {};
    await axios.get(`${API_URL}/api/store-address`).then(response => {
        console.warn("Address retrieved");
        data = response.data.data;
    }).catch(error => {
        console.warn("Error: " + error);
        data.error=error
    });
    return data;
}
export default storeAddress;