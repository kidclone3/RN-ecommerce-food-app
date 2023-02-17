import axios from 'axios';
import { API_URL } from '../index';
import EncryptedStorage from 'react-native-encrypted-storage';

export const updateReview = async (id, score, review) => {
    let code = 0;
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        console.warn('Not login yet');
        return 1;
    }
    await axios
        .put(
            `${API_URL}/api/ratings/comment/` + id,
            {
                score: score,
                comment: review,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        )
        .then((response) => {
            console.warn('Edit comment succeed');
            code = 0;
        })
        .catch((error) => {
            console.warn('Error: ' + error.response.data.error.message);
            code = 1;
        });
    return code;
};
export default updateReview;
