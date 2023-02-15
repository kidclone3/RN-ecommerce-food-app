import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import SocialSignInButton from '../../../components/Button/SocialSignInButton';
import styles from '../../../styles/authScreen';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/Button/CustomButton';
import CustomDivider from '../../../components/CustomDivider';
import { Button, Icon } from '@rneui/themed';
import { SIZES } from '../../../constants';
import { useLogin } from '../../../hooks/useLogin';

const SignInScreen = ({ navigation }) => {
    const hook = useLogin();

    return (
        <View style={styles.root}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://i.imgur.com/TQAOVkU.jpeg' }}
            />

            <Text style={styles.title}>Login to Your Account</Text>

            <CustomInput
                label="email"
                placeholder="Email"
                value={hook.identifier}
                setValue={(value) => hook.setIdentifier(value)}
                leftIcon={<Icon type="feather" name="mail" size={SIZES.h3} />}
                error={hook.identifierError}
            />
            <CustomInput
                label="password"
                placeholder="Your password"
                value={hook.password}
                setValue={(value) => hook.setPassword(value)}
                secureTextEntry={true}
                leftIcon={<Icon type="feather" name="key" size={SIZES.h3} />}
                error={hook.passwordError}
            />

            <Text style={[stylesExtends.loginError]}>{hook.loginError}</Text>

            <CustomButton
                text="Sign In"
                onPress={() => {
                    hook.submit((user) => {
                        if (user) {
                            navigation.push('HomeTab');
                        }
                    });
                }}
            />
            <CustomDivider text="or continue with" />
            <SocialSignInButton horizontal={true} />
            <Button
                // eslint-disable-next-line react-native/no-inline-styles
                containerStyle={{
                    width: '80%',
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                title="Forgot Password?"
                type="clear"
                // eslint-disable-next-line react-native/no-inline-styles
                titleStyle={{ color: 'grey', fontSize: 12 }}
                onPress={() => navigation.push('SendMailResetPassword')}
            />
            <Button
                // eslint-disable-next-line react-native/no-inline-styles
                containerStyle={{
                    width: '80%',
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                title="Don't have an account? Sign Up"
                type="clear"
                // eslint-disable-next-line react-native/no-inline-styles
                titleStyle={{ color: 'grey', fontSize: 12 }}
                onPress={() => navigation.push('SignUp')}
            />
        </View>
    );
};

const stylesExtends = StyleSheet.create({
    loginError: { color: 'red', fontSize: 12, fontWeight: 'bold' },
});

export default SignInScreen;
