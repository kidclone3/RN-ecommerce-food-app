import React from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import { useManagerSendMailResetPassword } from '../../../hooks/useManagerSendMailResetPassword';
import CustomInput from '../../../components/CustomInput/CustomInput';
import { COLORS, SIZES } from '../../../constants';
import { Button, Icon } from '@rneui/themed';

export const SendMailResetPassword = (props) => {
    const hook = useManagerSendMailResetPassword();

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

                <Text style={styles.title}>Send Mail Reset Password</Text>
                <CustomInput
                    label="email"
                    placeholder="Email"
                    value={hook.email}
                    setValue={(value) => hook.setEmail(value)}
                    leftIcon={
                        <Icon type="feather" name="mail" size={SIZES.h3} />
                    }
                    error={hook.emailError}
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
                    title="Send Code"
                    type="clear"
                    // eslint-disable-next-line react-native/no-inline-styles
                    titleStyle={{ color: 'white', fontSize: 14 }}
                    onPress={() => {
                        hook.submit((jsonRes) => {
                            if (jsonRes != null) {
                                props.navigation.push('ResetPassword', {
                                    email: hook.email,
                                });
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
