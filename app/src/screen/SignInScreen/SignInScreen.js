import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/logo-hus.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import TickButton from '../../components/TickButton/TickButton';

const SignInScreen = () => {

    const {username, setUsername} = React.useState('');
    const {password, setPassword} = React.useState('');
    
    const onSignInPressed = () => {
        console.warn('Sign in pressed');
    }
    const onSignInFacebook = () => {
        console.warn('Sign in with Facebook pressed')
    }
    const onSignInGoogle = () => {
        console.warn('Sign in with Google pressed')
    }
    const onSignInApple = () => {
        console.warn('Sign in with Apple pressed')
    }

    const {height}= useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style = {[styles.logo, {height:height* 0.3}]} 
        resizeMode='contain'

    />
        <CustomInput 
            placeholder='Username'
            value={username}
            setValue={setUsername}
        /> 

        <CustomInput 
            placeholder='Password'
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
        />
        <TickButton />
        <CustomButton 
            text = 'Sign In' 
            onPress={onSignInPressed} 
        />
        {/* <CustomButton 
            text = 'Continue with Facebook' 
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"

        />
        <CustomButton 
            text = 'Continue with Google' 
            onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
        />
        
        <CustomButton 
            text = 'Continue with Apple' 
            onPress={onSignInApple}
            bgColor="#e3e3e3"
            fgColor="#363636"
        /> */}
        
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }, 
    logo: {
        width: '30%',
        // maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen