import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyOrderScreen from '../screen/Home/MyOrderScreen';
import NotificationScreen from '../screen/Home/NotificationScreen';
import SearchScreen from '../screen/Home/SearchScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator
    = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Notification"
                    component={NotificationScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="MyOrder"
                    component={MyOrderScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        )
    }

export default HomeNavigator


const styles = StyleSheet.create({})