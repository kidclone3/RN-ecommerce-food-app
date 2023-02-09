import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screen/Home/SearchScreen';
import MyCartScreen from '../screen/Home/MyCartScreen';
import HomeScreen from '../screen/HomeScreen';
const Stack = createNativeStackNavigator();

const HomeNavigator
    = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
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
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="MyCart"
                    component={MyCartScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SearchScreen"
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