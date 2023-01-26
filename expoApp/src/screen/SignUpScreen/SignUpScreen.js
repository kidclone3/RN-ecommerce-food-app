import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import TickButton from '../../components/TickButton/TickButton';
import SocialSignInButton from '../../components/SocialSignInButton';

const SignUpScreen = () => {

    const {username, setUsername} = React.useState('');
    const {email, setEmail} = React.useState('');
    const {password, setPassword} = React.useState('');
    const {passwordRepeat, setPasswordRepeat} = React.useState('');
    const onRegisterPressed = () => {
        console.warn('Sign up pressed');
    }


    const {height}= useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text>
                Create new account
            </Text>
            <CustomInput 
                placeholder='Username'
                value={username}
                setValue={setUsername}
            /> 
            <CustomInput 
                placeholder='Email'
                value={email}
                setValue={setEmail}
            /> 

            <CustomInput 
                placeholder='Password'
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomInput 
                placeholder='Repeat Password'
                value={passwordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry={true}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                <TickButton size = {20}/>
                <Text>Remember me</Text>
            </View>
            <CustomButton 
                text = 'Register' 
                onPress={onRegisterPressed} 
            />
            <SocialSignInButton />
            
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

export default SignUpScreen