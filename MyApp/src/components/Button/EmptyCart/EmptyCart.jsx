import { View, Text } from 'react-native'
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