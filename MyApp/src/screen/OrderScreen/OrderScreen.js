import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useOrderListManager } from '../../hooks/useOrderListManager';

const OrderScreen = ({ navigation }) => {
    const hook = useOrderListManager();

    return (
        <View>
            <Text>{hook.orders.length}</Text>
        </View>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({});
