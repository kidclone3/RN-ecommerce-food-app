import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    getFocusedRouteNameFromRoute,
    NavigationContainer,
} from '@react-navigation/native';
import OrderScreen from '../screen/OrderScreen';
import ProfileScreen from '../screen/ProfileScreen';
import HomeNavigator from './homeNav';
import { Icon } from '@rneui/themed';
import { COLORS, SIZES } from '../constants';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={{
                tabBarStyle: styles.tabBar,
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="HomeNavigator"
                component={HomeNavigator}
                options={({ route }) => ({
                    tabBarStyle: ((route) => {
                        const routeName =
                            getFocusedRouteNameFromRoute(route) ?? '';
                        if (routeName === 'ItemDetails') {
                            return { display: 'none' };
                        }
                        return;
                    })(route),
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            type="ionicon"
                            name={focused ? 'home-sharp' : 'home-outline'}
                            size={SIZES.body1}
                            color={focused ? 'green' : 'black'}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            type="ionicon"
                            name={focused ? 'reader-sharp' : 'reader-outline'}
                            size={SIZES.body1}
                            color={focused ? 'green' : 'black'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            type="ionicon"
                            name={focused ? 'person-sharp' : 'person-outline'}
                            size={SIZES.body1}
                            color={focused ? 'green' : 'black'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.white,
        height: 70,
        bottom: 0,
        borderRadius: 20,
        opacity: 0.95,
        shadowOffset: { width: 1, height: 4 },
        borderTopWidth: 0,
        elevation: 1,
    },
});
