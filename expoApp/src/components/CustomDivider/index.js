import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomDivider = ({text}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.container} />
        <View>
            <Text style={{textAlign: 'center', paddingHorizontal:8}}>
                {text}
            </Text>
        </View>
        <View style={styles.container} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: 1, 
        backgroundColor: '#EBEBEB',
        width: '80%',
        marginHorizontal: 8,
    }
})
export default CustomDivider