import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';
import { API_URL } from '../index';

export const createReview = async (slug, score, review) => {
    let code = 0;
    const jwt = await EncryptedStorage.getItem('jwt');
    if (!jwt) {
        console.warn('Not login yet');
        return 1;
    }
    await axios
        .post(
            `${API_URL}/api/ratings/reviews/` + slug,
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
            console.warn('Comment succeed');
            code = 0;
        })
        .catch((error) => {
            console.warn('Error: ' + error.response.data.error.message);
            code = 1;
        });
    return code;
};
export default createReview;
