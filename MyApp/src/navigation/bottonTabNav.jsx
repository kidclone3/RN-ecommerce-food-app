import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen';
import OrderScreen from '../screen/OrderScreen';
import MessageScreen from '../screen/MessageScreen';
import EwalletScreen from '../screen/EwalletScreen';
import ProfileScreen from '../screen/ProfileScreen';
import HomeNavigator from './homeNav';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();


const BottomTabs
    = () => {
        return (
            <Tab.Navigator
                initialRouteName='Profile'
                screenOptions={{
                    tabBarStyle: styles.tabBar,
                    headerShown: false,
                    tabBarShowLabel: false
                }}
                
            >
                <Tab.Screen
                    name="HomeNavigator"
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                type='ionicon'
                                name={focused ? 'home-sharp' : 'home-outline'}
                                size={30}
                                color={focused ? 'green' : 'black'}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Order"
                    component={OrderScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                type='ionicon'
                                name={focused ? 'reader-sharp' : 'reader-outline'}
                                size={30}
                                color={focused ? 'green' : 'black'}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                type='ionicon'
                                name={focused ? 'person-sharp' : 'person-outline'}
                                size={30}
                                color={focused ? 'green' : 'black'}
                            />
                        )
                    }}
                />

            </Tab.Navigator >
        )
    }

export default BottomTabs


const styles = StyleSheet.create({
    tabBar: {
        elevation: 1,
        backgroundColor: '#f5f5f5',
        height: 70,
        bottom: 0,
        borderRadius: 20,
        opacity: 0.95,
        shadowOffset: { width: 1, height: 4 },
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 0
    }
})