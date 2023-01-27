import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';

const SignUpScreen = () => {

    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
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
                placeholder='Phone Number'
                value={phoneNumber}
                setValue={setPhoneNumber}
            /> 
            <CustomInput 
                placeholder='Email'
                value={email}
                setValue={setEmail}
            /> 

            
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