import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Button, Icon } from '@rneui/themed';

const CartButton = () => {
    const onCartButtonPressed = () => {
        console.warn('Notification button pressed');
    }
    return (
        <>
            <Button
                type='outline'
                buttonStyle={{ width: 50, height: 50, borderRadius: 100, backgroundColor: 'white' }}
                icon={
                    <Icon
                        light
                        type='ionicon'
                        name='basket-outline'
                        size={30}
                    />
                }
                onPress={onCartButtonPressed}
            />

        </>
    )
}

export default CartButton

const styles = StyleSheet.create({})