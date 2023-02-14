import EncryptedStorage from 'react-native-encrypted-storage';

export const logout = async () => {
    await EncryptedStorage.removeItem('jwt');
    await EncryptedStorage.removeItem('username');
}
export default logout;