import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const SocialSignInButton = () => {
    
    const onSignInFacebook = () => {
        console.warn('Sign in with Facebook pressed')
    }
    const onSignInGoogle = () => {
        console.warn('Sign in with Google pressed')
    }
  return (
    <>
        <CustomButton 
            text = 'Continue with Facebook' 
            onPress={onSignInFacebook}
            type = 'TERTIARY'
            icon='facebook'
        >
            {/* <SocialIcon
                type='facebook'
                style={{marginRight: 10}}
            /> */}
        </CustomButton>
        <CustomButton 
            text = 'Continue with Google' 
            onPress={onSignInGoogle}
            type = 'TERTIARY'
            icon='google'

        />
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