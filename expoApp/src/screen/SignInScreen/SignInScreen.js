import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
// import CustomInput from '../../components/CustomInput/CustomInput';
// import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import styles from '../../styles/screen';
// import CustomInput from '../../components/CustomInput/CustomInput';
// import CustomButton from '../../components/CustomButton/CustomButton';
import CustomButton from '../../components/CustomButton';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import CustomDivider from '../../components/CustomDivider';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    const { username, setUsername } = React.useState('');
    const onRegisterPressed = () => {
        console.warn('Sign up pressed');
    }
    const navigation = useNavigation();

    const { height } = useWindowDimensions();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://i.imgur.com/TQAOVkU.jpeg' }}
                />

                <Text style={styles.title}>
                    Login to Your Account
                </Text>
                {/* <CustomInput 
                placeholder='Phone Number'
                value={phoneNumber}
                setValue={setPhoneNumber}
            />  */}
                <PhoneNumberInput />

                <CustomButton
                    text='Sign Up'
                    onPress={onRegisterPressed}
                />
                <CustomDivider
                    text="or continue with"
                />
                <SocialSignInButton horizontal={true} />
                <Button
                    containerStyle={{
                        width: "80%",
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    title="Don't have an account? Sign Up"
                    type="clear"
                    titleStyle={{ color: 'grey', fontSize: 12, }}
                    onPress={() => navigation.push("SignUp")}
                />
            </View>
        </ScrollView>
    )
}


export default SignInScreen