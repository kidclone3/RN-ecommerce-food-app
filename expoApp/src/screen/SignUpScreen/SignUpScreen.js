import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import CustomDivider from '../../components/CustomDivider';
import { SocialIcon, Icon, Skeleton, Button } from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import PhoneNumberInput from '../../components/PhoneNumberInput';


const SignUpScreen = () => {

    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn('Sign up pressed');
    }


    const {height}= useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>

            <Image
                style={styles.logo}
                source={{uri:'https://i.imgur.com/TQAOVkU.jpeg'}}
            />

            <Text style={styles.title}>
                Create new account
            </Text>
            {/* <CustomInput 
                placeholder='Phone Number'
                value={phoneNumber}
                setValue={setPhoneNumber}
            />  */}
            <PhoneNumberInput />

            <CustomInput
                label='email'
                placeholder='Email'
                leftIcon={
                    <Icon 
                        type='material-community'
                        name="mail" 
                        size={20}
                    />
                }
            />
            <CustomInput
                label='username'
                placeholder='Full Name'
                leftIcon={
                    <Icon 
                        type='material-community'
                        name="account-outline" 
                        size={20}
                    />
                }
            />
            

            
            <CustomButton 
                text = 'Sign Up' 
                onPress={onRegisterPressed} 
            />
            <CustomDivider
                text="or continue with"
            />
            <View style={{flexDirection:'row'}}>
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
                width: "80%",
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              title="Already have an account? Sign in"
              type="clear"
              titleStyle={{ color: 'grey', fontSize:12, }}
              onPress= {() => navigation.navigate("SignIn")}
            />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    }, 
    logo: {
        width: 55,
        height: 66,
        // maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        padding: 30,
        fontSize:32,
    }
});

export default SignUpScreen