import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OrderScreen from '../screen/OrderScreen';
import MessageScreen from '../screen/MessageScreen';
import EwalletScreen from '../screen/EwalletScreen';
import ProfileScreen from '../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs
    = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Order" component={OrderScreen} />
                <Tab.Screen name="Message" component={MessageScreen} />
                <Tab.Screen name="Ewallet" component={EwalletScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />

            </Tab.Navigator>
        )
    }

export default Tabs


const styles = StyleSheet.create({})