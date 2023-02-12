import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/Button/CustomButton/CustomButton';
import SocialSignInButton from '../../../components/Button/SocialSignInButton';
import {CheckBox, Divider, useTheme, Button} from '@rneui/themed';
import CustomDivider from '../../../components/CustomDivider';
import {COLORS} from "../../../constants";
import {checkToken} from "../../../services/account";

const LetInScreen = ({ navigation }) => {

    // const [username, setUsername] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [rememberMe, setRememberMe] = React.useState(false);
    // const { theme } = useTheme();

    // const onSignInPressed = () => {
    //     console.warn('Sign in pressed');
    //     // validate user
    //     // if valid, navigate to home screen
    //
    // }


    let loaded = true
    useEffect(()=>{
        checkToken().then((res)=>{
            if (loaded){
                if (res === 0)
                    navigation.push('HomeTab')
            }
        }).catch((err)=>{})

        return () => {loaded = false}
    },[])

    return (
        <View style={styles.root}>
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://i.imgur.com/TQAOVkU.jpeg',
                }}
            />
            <Text style={styles.title}>
                Let's you in
            </Text>
            <SocialSignInButton />

            <CustomDivider
                text='or'
            />

            {/* <CustomInput 
                placeholder='Username'
                value={username}
                setValue={setUsername}
            /> 

            <CustomInput 
                placeholder='Password'
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            /> */}

            {/* <CheckBox
                center
                title='Remember me'
                iconType="material-community"
                checkedIcon="checkbox-marked"
                checkedColor="green"
                uncheckedIcon="checkbox-blank-outline"
                uncheckedColor="green"
                checked={rememberMe}
                onPress={() => setRememberMe(!rememberMe)}
            /> */}

            <CustomButton
                text='Sign in with Email'
                onPress={() => navigation.push('SignIn')}
            />
            <Button
                containerStyle={{
                    width: "80%",
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                title="Don't have an account? Sign up"
                type="clear"
                titleStyle={{ color: 'grey', fontSize: 12, }}
                onPress={() => navigation.push("SignUp")}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingTop: 50,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
    },
    logo: {
        width: 66,
        height: 58,
    },
    title: {
        color: COLORS.darkgray,
        padding: 30,
        fontSize: 32,
        paddingHorizontal: 20,
    },

});

export default LetInScreen