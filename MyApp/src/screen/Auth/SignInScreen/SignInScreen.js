import {View, Text, Image} from 'react-native';
import React from 'react';
import SocialSignInButton from '../../../components/Button/SocialSignInButton';
import styles from '../../../styles/authScreen';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/Button/CustomButton';
import CustomDivider from '../../../components/CustomDivider';
import {Button, Icon} from '@rneui/themed';
import {SIZES} from '../../../constants';
import {validateEmail, validatePassword} from '../../../constants/validate';
import {login} from '../../../services/account';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  // const [remember, setRemember] = React.useState(false);
  // const navigation = useNavigation();

  const onSignInPressed = async () => {
    console.warn('Sign up pressed');
    navigation.push('HomeTab');

    let isValid = true;
    if (!validateEmail(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else setEmailError('');
    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters and contain at least one number,' +
          '' +
          ' one lowercase, one uppercase letter, one special character',
      );
      isValid = false;
    } else setPasswordError('');
    if (!isValid) {
      return false;
    }
    switch (await login(email, password)) {
      case 2: {
        setPasswordError('Invalid email or password');
        return false;
      }
      case 3: {
        setEmailError('Your account email is not confirmed');
        return false;
      }
    }
    navigation.push('HomeTab');

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters and contain at least one number,' +
          '' +
          ' one lowercase, one uppercase letter, one special character',
      );
      isValid = false;
    } else {
      setPasswordError('');
    }
    if (!isValid) {
      return false;
    }
    switch (await login(email, password)) {
      case 2: {
        setPasswordError('Invalid email or password');
        return false;
      }
      case 3: {
        setEmailError('Your account email is not confirmed');
        return false;
      }
    }
    navigation.push('HomeTab');
  };

  return (
    <View style={styles.root}>
      <Image
        style={styles.logo}
        source={{uri: 'https://i.imgur.com/TQAOVkU.jpeg'}}
      />

      <Text style={styles.title}>Login to Your Account</Text>

      <CustomInput
        label="email"
        placeholder="Email"
        value={email}
        setValue={value => setEmail(value)}
        leftIcon={<Icon type="feather" name="mail" size={SIZES.h3} />}
        error={emailError}
      />
      <CustomInput
        label="password"
        placeholder="Your password"
        value={password}
        setValue={value => setPassword(value)}
        secureTextEntry={true}
        leftIcon={<Icon type="feather" name="key" size={SIZES.h3} />}
        error={passwordError}
      />

      {/*<CheckBox*/}
      {/*    center*/}
      {/*    title='Remember me'*/}
      {/*    iconType='material-community'*/}
      {/*    checkedIcon='checkbox-marked'*/}
      {/*    uncheckedIcon='checkbox-blank-outline'*/}
      {/*    checkedColor='green'*/}
      {/*    checked={remember}*/}
      {/*    onPress={() => setRemember(!remember)}*/}
      {/*    wrapperStyle={{ margin: 0,padding:0 }}*/}
      {/*/>*/}

      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomDivider text="or continue with" />
      <SocialSignInButton horizontal={true} />
      <Button
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          width: '80%',
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        title="Forgot Password?"
        type="clear"
        // eslint-disable-next-line react-native/no-inline-styles
        titleStyle={{color: 'grey', fontSize: 12}}
        onPress={() => navigation.push('SendMailResetPassword')}
      />
      <Button
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{
          width: '80%',
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        title="Don't have an account? Sign Up"
        type="clear"
        // eslint-disable-next-line react-native/no-inline-styles
        titleStyle={{color: 'grey', fontSize: 12}}
        onPress={() => navigation.push('SignUp')}
      />
    </View>
  );
};

export default SignInScreen;
