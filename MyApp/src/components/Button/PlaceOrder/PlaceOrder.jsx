import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { SIZES, COLORS, FONTS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
const PlaceOrder = () => {
    const navigation = useNavigation()
  return (
    <Button
        title={"Place Order"}
        buttonStyle={styles.addToCartStyle}
        titleStyle={{
            ...FONTS.h3,
        }}
        containerStyle={{
            position: 'relative',
            padding: SIZES.padding * 2,
            paddingBottom: 0,
        }}
        onPress={() => navigation.navigate('Checkout')}
    />
  )
}

export default PlaceOrder
const styles = StyleSheet.create({
    addToCartStyle: {
        bottom: 20,
        padding: SIZES.padding * 2,
        width: '100%',
        height: 60,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius,
    },
})