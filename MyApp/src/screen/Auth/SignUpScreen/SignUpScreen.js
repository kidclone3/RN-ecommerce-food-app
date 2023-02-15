import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import React from 'react';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/Button/CustomButton/CustomButton';
import SocialSignInButton from '../../../components/Button/SocialSignInButton';
import CustomDivider from '../../../components/CustomDivider';
import { SocialIcon, Icon, CheckBox, Button, Header } from '@rneui/themed';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import styles from '../../../styles/authScreen';
import { SIZES } from '../../../constants';
import { validateEmail, validatePassword } from '../../../constants/validate';
import { login, register } from '../../../services/account';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [usernameError, setUsernameError] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');

    const onRegisterPressed = async () => {
        console.warn('Sign up pressed');
        let isValid = true;
        if (!validateEmail(email)) {
            setEmailError('Email is invalid');
            isValid = false;
        } else setEmailError('');
        if (!validatePassword(password)) {
            setPasswordError(
                'Password must be at least 8 characters and contain at least one number,' +
                    ' one lowercase, one uppercase letter, one special character'
            );
            isValid = false;
        } else setPasswordError('');
        if (!username) {
            setUsernameError('Username is required');
            isValid = false;
        } else setUsernameError('');
        if (!isValid) {
            return false;
        }
        switch (await register(username, password, email)) {
            case 1:
                return false;
            case 2: {
                setEmailError('Email is already in use');
                return false;
            }
        }
        navigation.push('HomeTab');
    };

    return (
        <View style={{ ...styles.root }}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://i.imgur.com/TQAOVkU.jpeg' }}
            />

            <Text style={styles.title}>Create new account</Text>
            {/* <CustomInput 
                placeholder='Phone Number'
                value={phoneNumber}
                setValue={setPhoneNumber}
            />  */}
            {/* <PhoneNumberInput/> */}

            <CustomInput
                label="email"
                placeholder="Email"
                value={email}
                setValue={(value) => setEmail(value)}
                leftIcon={
                    <Icon type="material-community" name="mail" size={20} />
                }
                error={emailError}
            />
            <CustomInput
                label="username"
                placeholder="Full Name"
                value={username}
                setValue={(value) => setUsername(value)}
                leftIcon={
                    <Icon
                        type="material-community"
                        name="account-outline"
                        size={20}
                    />
                }
                error={usernameError}
            />

            <CustomInput
                label="password"
                secureTextEntry={true}
                value={password}
                setValue={(value) => setPassword(value)}
                placeholder="Your password"
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
            {/*    wrapperStyle={{ marginVertical: 10 }}*/}
            {/*/>*/}

            <CustomButton text="Sign Up" onPress={onRegisterPressed} />
            <CustomDivider text="or continue with" />
            <View style={{ flexDirection: 'row' }}>
                <SocialIcon
                    //Social Icon using @rneui/themed
                    button
                    light
                    //To make a button type Social Icon
                    type="facebook"
                    //Type of Social Icon
                    onPress={() => {
                        //Action to perform on press of Social Icon
                        alert('facebook');
                    }}
                />
                <SocialIcon
                    //Social Icon using @rneui/themed
                    button
                    light
                    //To make a button type Social Icon
                    type="google"
                    //Type of Social Icon
                    onPress={() => {
                        //Action to perform on press of Social Icon
                        alert('google');
                    }}
                />
            </View>
            <Button
                containerStyle={{
                    width: '80%',
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                title="Already have an account? Sign in"
                type="clear"
                titleStyle={{ color: 'grey', fontSize: 12 }}
                onPress={() => navigation.push('SignIn')}
            />
        </View>
    );
};

export default SignUpScreen;
