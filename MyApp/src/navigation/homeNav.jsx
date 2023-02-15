import React from 'react';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import SearchScreen from '../screen/Home/SearchScreen';
import MyCartScreen from '../screen/Home/MyCartScreen';
import HomeScreen from '../screen/HomeScreen';
import ItemDetailsScreen from '../screen/Item/ItemDetailsScreen/ItemDetailsScreen';
import CheckoutOrdersScreen from '../screen/Home/CheckoutOrdersScreen';
const Stack = createNativeStackNavigator();

function HomeNavigator({navigation}) {
    // const navigation = useNavigation();
    return (
        <Stack.Navigator
            // initialRouteName="ItemDetails"
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            type="ionicon"
                            name={focused ? 'home-sharp' : 'home-outline'}
                            size={30}
                            color={focused ? 'green' : 'black'}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MyCart"
                component={MyCartScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ItemDetails"
                component={ItemDetailsScreen}
                options={{
                    headerShown: false,
                }}
                initialParams={{ itemId: 1 }}
            />
            <Stack.Screen
                name="Checkout"
                component={CheckoutOrdersScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigator;
