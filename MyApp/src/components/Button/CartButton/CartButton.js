import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Button, Icon } from '@rneui/themed';
import { COLORS, SIZES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';

const CartButton = () => {
    const navigation = useNavigation();
    const onCartButtonPressed = () => {
        navigation.push('MyCart');
    }
    return (
        <>
            <Button
                type='outline'
                buttonStyle={styles.buttonStyle}
                icon={
                    <Icon
                        light
                        type='feather'
                        name='shopping-cart'
                        size={SIZES.h3}
                    />
                }
                onPress={onCartButtonPressed}
                size='sm'
            />

        </>
    )
}

export default CartButton

const styles = StyleSheet.create({
    buttonStyle: {
        width: 50, height: 50, borderRadius: 100, backgroundColor: 'white',
        borderColor: COLORS.lightGray3,
        borderWidth: 2,
    }

})