import { Button, Icon } from '@rneui/themed';
import React from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import CustomInput from '../../../components/CustomInput/CustomInput';
import { COLORS, SIZES } from '../../../constants';
import { useManagerResetPassword } from '../../../hooks/useManagerResetPassword';

export const ResetPassword = (props) => {
    const hook = useManagerResetPassword({ email: props.route?.params?.email });

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={[styles.container]}
                behavior={'padding'}
            >
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://i.imgur.com/TQAOVkU.jpeg' }}
                />

                <Text style={styles.title}>Reset Password</Text>
                <CustomInput
                    label="code"
                    placeholder="Code"
                    value={hook.code}
                    setValue={(value) => hook.setCode(value)}
                    leftIcon={
                        <Icon type="feather" name="key" size={SIZES.h3} />
                    }
                    error={hook.codeError}
                />
                <CustomInput
                    label="password"
                    placeholder="Password"
                    value={hook.password}
                    setValue={(value) => hook.setPassword(value)}
                    leftIcon={
                        <Icon type="feather" name="key" size={SIZES.h3} />
                    }
                    error={hook.passwordError}
                    secureTextEntry
                />
                <CustomInput
                    label="password confirmation"
                    placeholder="Password Retype"
                    value={hook.passwordRetype}
                    setValue={(value) => hook.setPasswordRetype(value)}
                    leftIcon={
                        <Icon type="feather" name="key" size={SIZES.h3} />
                    }
                    error={hook.passwordRetypeError}
                    secureTextEntry
                />
                <Button
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyle={{
                        width: '95%',
                        marginHorizontal: 8,
                        backgroundColor: '#29974D',
                        borderRadius: 999,
                        padding: 6,
                    }}
                    title="Reset Password"
                    type="clear"
                    // eslint-disable-next-line react-native/no-inline-styles
                    titleStyle={{ color: 'white', fontSize: 14 }}
                    onPress={() => {
                        hook.submit((jsonRes) => {
                            if (jsonRes) {
                                props.navigation.push('SignIn');
                            }
                        });
                    }}
                    disabled={hook.isProgressing}
                />
                <Button
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyle={{
                        width: '80%',
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    title="Already have an account? Sign in"
                    type="clear"
                    // eslint-disable-next-line react-native/no-inline-styles
                    titleStyle={{ color: 'grey', fontSize: 12 }}
                    onPress={() => props.navigation.push('SignIn')}
                    disabled={hook.isProgressing}
                />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 55,
        height: 66,
        // maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        paddingVertical: Math.min(
            Math.round(SIZES.width * 0.05),
            SIZES.padding * 3
        ),
        paddingHorizontal: SIZES.padding3,
        width: SIZES.width * 0.85,
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.black,
    },
});
