import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {COLORS, SIZES} from '../../constants'

const CustomDivider = ({ text, style, type = 'DEFAULT' }) => {
    return (
        <View
            style={[{
                flexDirection: 'row',
                alignItems: 'center',
            },
            styles[`container_${type}`]
            ]}>
            <View style={styles.container} />
            <View>
                <Text style={{ textAlign: 'center', paddingHorizontal: 8, ...styles[`text_${type}`] }}>
                    {text}
                </Text>
            </View>
            <View style={styles.container} />
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.darkgray,
        width: '80%',
        marginHorizontal: 8,
    },
    container_DEFAULT: {
        padding: 50,
    },
    container_BOX: {
        padding: 20,
        backgroundColor: COLORS.lightGray4
    },
    text_DEFAULT: {
        color: COLORS.darkgray,
        fontSize: SIZES.body4,
    }

})
export default CustomDivider