import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
// import CustomInput from '../../components/CustomInput/CustomInput';
// import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import styles from '../../styles/screen';
// import CustomInput from '../../components/CustomInput/CustomInput';
// import CustomButton from '../../components/CustomButton/CustomButton';
import CustomButton from '../../components/CustomButton';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import CustomDivider from '../../components/CustomDivider';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {resetPass} from "../../services/account/resetpass";


const SignInScreen = () => {
  const {username, setUsername} = React.useState('');
  const onRegisterPressed = () => {
    console.warn('Sign up pressed');
    resetPass("aef8e4da96a0edaf76987fe2ab7e3e8d40a2c44a1895900f0d7770fa4ff31bd3de5b68e1ef654029d0d586eb6674d545f6d470b6db695c5307c8af36d7ae20ff","12345678","12345678");
  };
  const navigation = useNavigation();

  const {height} = useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          style={styles.logo}
          source={{uri: 'https://i.imgur.com/TQAOVkU.jpeg'}}
        />

        <Text style={styles.title}>Login to Your Account</Text>
        {/* <CustomInput
                placeholder='Phone Number'
                value={phoneNumber}
                setValue={setPhoneNumber}
            />  */}
        <PhoneNumberInput />

        <CustomButton text="Sign Up" onPress={onRegisterPressed} />
        <CustomDivider text="or continue with" />
        <SocialSignInButton horizontal={true} />
        <Button
          containerStyle={{
            width: '80%',
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          title="Don't have an account? Sign Up"
          type="clear"
          titleStyle={{color: 'grey', fontSize: 12}}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
