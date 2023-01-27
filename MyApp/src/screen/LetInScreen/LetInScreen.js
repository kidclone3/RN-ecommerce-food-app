import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
import { CheckBox, Divider, useTheme, Button } from '@rneui/themed';
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
        navigation.navigate('SignIn');
    }

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            <Button
              containerStyle={{
                width: "80%",
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              title="Don't have an account? Sign up"
              type="clear"
              titleStyle={{ color: 'grey', fontSize:12, }}
              onPress= {() => navigation.navigate("SignUp")}
            />
                
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        paddingTop: 50,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white',
    }, 
    logo: {
        width: 66,
        height: 58,
      },
    title: {
        padding: 30,
        fontSize: 32,
        paddingHorizontal: 20,
    },
    
});

export default LetInScreen