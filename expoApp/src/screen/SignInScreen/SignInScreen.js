import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import TickButton from '../../components/TickButton/TickButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
import { CheckBox, Icon } from '@rneui/themed';

const SignInScreen = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
    const navigation = useNavigation();
    
    const onSignInPressed = () => {
        console.warn('Sign in pressed');
        // validate user
        // if valid, navigate to home screen
        navigation.navigate('HomeScreen');
    }

    const {height}= useWindowDimensions();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Image 
            source={require('../../../assets/images/example-icon/order.png')}
            style = {[styles.logo, {height:height* 0.3}]} 
            resizeMode='contain'

        />
        <Text style={styles.title}>
            Let's you in
        </Text>
        <SocialSignInButton />

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
        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            
            <CheckBox />
            <Text>Remember me</Text>
        </View> */}
        <CheckBox
            center
            title='Remember me'
            labelStyle={{color: 'green' }}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            checkedColor="green"
            uncheckedIcon="checkbox-blank-outline"
            uncheckedColor="green"
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
        />

        <CustomButton 
            text = 'Sign In' 
            onPress={onSignInPressed} 
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
    title: {
        fontSize: 32,
    }
});

export default SignInScreen