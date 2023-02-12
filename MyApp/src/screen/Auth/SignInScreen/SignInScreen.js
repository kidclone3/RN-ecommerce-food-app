import { View, Text, Image } from 'react-native'
import React from 'react'
import SocialSignInButton from '../../../components/Button/SocialSignInButton';
import styles from '../../../styles/authScreen';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/Button/CustomButton';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import CustomDivider from '../../../components/CustomDivider';
import { Button, CheckBox, Icon } from '@rneui/themed';
import { SIZES } from '../../../constants';

const SignInScreen = ({ navigation }) => {

    const [email, setEmail] = React.useState('');
    const [remember, setRemember] = React.useState(false);
    // const navigation = useNavigation();


    const onSignInPressed = () => {
        console.warn('Sign up pressed');
        navigation.push('HomeTab')
    }

    return (
        <View style={styles.root}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://i.imgur.com/TQAOVkU.jpeg' }}
            />

            <Text style={styles.title}>
                Login to Your Account
            </Text>

            <CustomInput
                label='email'
                placeholder='Email'
                leftIcon={
                    <Icon
                        type='feather'
                        name="mail"
                        size={SIZES.h3}
                    />
                }
            />
            <CustomInput
                label='password'
                placeholder='Your password'
                leftIcon={
                    <Icon
                        type='feather'
                        name="key"
                        size={SIZES.h3}
                    />
                }
            />

            <CheckBox
                center
                title='Remember me'
                iconType='material-community'
                checkedIcon='checkbox-marked'
                uncheckedIcon='checkbox-blank-outline'
                checkedColor='green'
                checked={remember}
                onPress={() => setRemember(!remember)}
                wrapperStyle={{ marginVertical: 10 }}
            />

            <CustomButton
                text='Sign In'
                onPress={onSignInPressed}
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
    )
}


export default SignInScreen