import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style = {style.container}>
        <TextInput 
            placeholder={placeholder}
            value={value}
            style={style.input}
            secureTextEntry={secureTextEntry}
        />
    </View>
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
        marginVertical: 15,
    },
    input: {
        padding: 10,
    },
});


export default CustomInput