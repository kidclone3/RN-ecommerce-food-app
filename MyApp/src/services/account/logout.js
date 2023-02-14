import EncryptedStorage from 'react-native-encrypted-storage';

export const logout = async () => {
  await EncryptedStorage.clear();
};
export default logout;
