import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import SocialSignInButton from '../../../components/Button/SocialSignInButton';
import styles from '../../../styles/authScreen';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/Button/CustomButton';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import CustomDivider from '../../../components/CustomDivider';
import { Button, CheckBox, Icon } from '@rneui/themed';

const ConfirmEmailScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [remember, setRemember] = React.useState(false);
    const onConfirmPressed = () => {
        console.warn('Confirm pressed');
    };
    const [resendCode, setResendCode] = React.useState(60);
    const onResendPressed = () => {
        if (resendCode <= 0) {
            console.warn('Resent!');
            setResendCode(60);
        } else {
            console.warn('Wait for it');
        }
    };
    // const navigation = useNavigation();

    React.useEffect(() => {
        const interval = setInterval(() => {
            resendCode > 0
                ? setResendCode((resendCode) => resendCode - 1)
                : setResendCode(0);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://i.imgur.com/TQAOVkU.jpeg' }}
                />

                <Text style={styles.title}>Confirm Email</Text>
                {/* <CustomInput 
                placeholder='Phone Number'
                value={phoneNumber}
                setValue={setPhoneNumber}
            />  */}
                <CustomInput
                    label="code"
                    placeholder="Enter your verification code"
                />
                <Text style={{ padding: 20 }}>
                    Resend code in {resendCode} seconds
                </Text>

                <CustomButton text="Confirm" onPress={onConfirmPressed} />
                <CustomButton
                    text="Resend"
                    onPress={onResendPressed}
                    type="TERTIARY"
                    style={{ borderWidth: 5 }}
                />
                <CustomDivider text="or continue with" />
                <SocialSignInButton horizontal={true} />
                <Button
                    containerStyle={{
                        width: '80%',
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    title="Don't have an account? Sign Up"
                    type="clear"
                    titleStyle={{ color: 'grey', fontSize: 12 }}
                    onPress={() => navigation.push('SignUp')}
                />
            </View>
        </ScrollView>
    );
};

export default ConfirmEmailScreen;
