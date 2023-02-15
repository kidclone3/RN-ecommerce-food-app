import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Image } from '@rneui/themed'
import { SIZES, COLORS, images } from '../../../constants'

const EmptyCart = () => {
    return (
        <View style={styles.container}>
            <Image
                source={images.clipboards}
                style={{
                    width: 300,
                    height: 300,
                    resizeMode: 'contain',
                }}
            />
            <Text
                style={{
                    padding: SIZES.padding * 2,
                    fontSize: SIZES.h2,
                    fontWeight: 'bold',
                }}
            >
                Empty
            </Text>
            <Text style={{ fontSize: SIZES.body3 }}>
                You don't have any foods in cart at this time
            </Text>
        </View>
    );
}

export default EmptyCart
const styles = StyleSheet.create({
    container: {
        height: '90%',
        width: '100%',
        backgroundColor: COLORS.white,
        // position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        // flexDirection: 'column',
    },
})