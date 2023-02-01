import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Button, Icon } from '@rneui/themed';

const NotificationButton = () => {
    const onNotificationButtonPressed = () => {
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
                        name='mail-outline'
                        size={30}
                    />
                }
                onPress={onNotificationButtonPressed}
            />

        </>
    )
}

export default NotificationButton

const styles = StyleSheet.create({})