import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Input } from '@rneui/themed'
import React from 'react'

const CustomInput = ({leftIcon, value, setValue, placeholder, secureTextEntry=false,error}) => {
  return (
    <>
        <Input 
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
            inputContainerStyle={style.container}
            secureTextEntry={secureTextEntry}
            leftIcon = {leftIcon}
            leftIconContainerStyle = {style.leftIconContainerStyle}
            errorMessage={error}
            errorStyle={{color: 'red', fontSize: 12, fontWeight: 'bold'}}
        />
    </>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        // marginVertical: 15,
    },
    input: {
        padding: 15,
    },
    leftIconContainerStyle: {
        paddingRight: 20,
    }
});


export default CustomInput