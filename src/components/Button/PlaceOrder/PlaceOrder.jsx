import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed'
import { SIZES, COLORS, FONTS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
const PlaceOrder = ({refs, refs_price}) => {
   
    const navigation = useNavigation()
    // const {refs} = route.params;
    function handlePress() {
        console.log("REFS " + refs.current);
        navigation.push("Checkout", {ref: refs, ref_price: refs_price});
    }
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
            paddingBottom: SIZES.padding*1.5,
        }}
        onPress={handlePress}
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
        bottom: SIZES.padding,
    },
})