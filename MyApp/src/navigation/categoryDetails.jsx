import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LetInScreen from '../screen/Auth/LetInScreen';
import SignUpScreen from '../screen/Auth/SignUpScreen';
import SignInScreen from '../screen/Auth/Auth/SignInScreen';
import ConfirmEmailScreen from '../screen/Auth/Auth/ConfirmEmailScreen';
import HomeHeader from '../components/Header/HomeHeader';
import NotificationButton from '../components/Button/NotificationButton';
import CartButton from '../components/Button/CartButton';
import BottomTabs from './bottonTabNav'
import MoreItemScreen from '../screen/Auth/MoreItemScreen';

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MoreItem" component={MoreItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation