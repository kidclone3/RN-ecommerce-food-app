import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { SocialIcon } from '@rneui/themed'

const SocialSignInButton = ({ horizontal }) => {

    const onSignInFacebook = () => {
        console.warn('Sign in with Facebook pressed')
    }
    const onSignInGoogle = () => {
        console.warn('Sign in with Google pressed')
    }
    return (
        <>
            {!horizontal ? (
                <>
                    <CustomButton
                        text='Continue with Facebook'
                        onPress={onSignInFacebook}
                        type='TERTIARY'
                        icon='facebook'
                    >
                        {/* <SocialIcon
                    type='facebook'
                    style={{marginRight: 10}}
                /> */}
                    </CustomButton>
                    <CustomButton
                        text='Continue with Google'
                        onPress={onSignInGoogle}
                        type='TERTIARY'
                        icon='google'

                    />

                </>
            ) : (
                <View style={{ flexDirection: 'row' }}>
                    <SocialIcon
                        //Social Icon using @rneui/themed
                        button
                        light
                        //To make a button type Social Icon
                        type="facebook"
                        //Type of Social Icon
                        onPress={() => {
                            //Action to perform on press of Social Icon
                            alert('facebook');
                        }}
                    />
                    <SocialIcon
                        //Social Icon using @rneui/themed
                        button
                        light
                        //To make a button type Social Icon
                        type="google"
                        //Type of Social Icon
                        onPress={() => {
                            //Action to perform on press of Social Icon
                            alert('google');
                        }}
                    />
                </View>
            )}
        </>
    )
}
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
export default SocialSignInButton