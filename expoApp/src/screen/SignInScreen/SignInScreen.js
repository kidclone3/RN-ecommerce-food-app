import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
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
    

    const {height}= useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                <TickButton size = {20}/>
                <Text>Remember me</Text>
            </View>
            <CustomButton 
                text = 'Sign In' 
                onPress={onSignInPressed} 
            />
            <CustomButton 
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
            
        </View>
    </ScrollView>
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