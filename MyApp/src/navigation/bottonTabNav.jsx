import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen';
import OrderScreen from '../screen/OrderScreen';
import MessageScreen from '../screen/MessageScreen';
import EwalletScreen from '../screen/EwalletScreen';
import ProfileScreen from '../screen/ProfileScreen';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
    return (
        <BottomTabBar {...props.props} />
    )
}

const BottomTabs
    = () => {
        return (
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        borderTopWidth: 0,
                        backgroundColor: 'transparent',
                        elevation: 0
                    }
                }}
                screenOptions={{
                    tabBarStyle: {
                        elevation: 1,
                        backgroundColor: '#f5f5f5',
                        height: 70,
                        bottom: 0,
                        borderRadius: 20,
                        opacity: 0.95,
                        shadowOffset: { width: 1, height: 4 },
                    },
                }}

            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
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
                <Tab.Screen
                    name="Message"
                    component={MessageScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                type='ionicon'
                                name={focused ? 'chatbubble-ellipses-sharp' : 'chatbubble-ellipses-outline'}
                                size={30}
                                color={focused ? 'green' : 'black'}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Ewallet" component={EwalletScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                type='ionicon'
                                name={focused ? 'wallet-sharp' : 'wallet-outline'}
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


const styles = StyleSheet.create({})