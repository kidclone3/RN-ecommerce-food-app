import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
import { CheckBox, Divider, useTheme } from '@rneui/themed';
import CustomDivider from '../../components/CustomDivider';

const LetInScreen = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
    const {theme} = useTheme();
    const navigation = useNavigation();
    
    const onSignInPressed = () => {
        console.warn('Sign in pressed');
        // validate user
        // if valid, navigate to home screen
        navigation.navigate('HomeScreen');
    }

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
                // source={require('../../../assets/images/example-icon/order.png')}
                style = {[styles.logo, {height:windowHeight* 0.3}]} 
                resizeMode='contain'

            />
            <Text style={styles.title}>
                Let's you in
            </Text>
            <SocialSignInButton />

            <CustomDivider text='or'/>

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
                text = 'Sign in with Phone Number' 
                onPress={onSignInPressed} 
            />
            <Text style={{color:'#828282', width:windowWidth * 0.3}}>
                Don't have an account? Sign up
            </Text>
                
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    }, 
    logo: {
        width: '30%',
        // maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        fontSize: 32,
    },
    
});

export default LetInScreen