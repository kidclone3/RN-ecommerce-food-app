import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LetInScreen from '../screen/LetInScreen';
import SignUpScreen from '../screen/SignUpScreen';
import HomeScreen from '../screen/HomeScreen';
import SignInScreen from '../screen/SignInScreen';
import ConfirmEmailScreen from '../screen/ConfirmEmailScreen';
import HomeHeader from '../components/Header/HomeHeader';
import { Button } from '@rneui/base';
import NotificationButton from '../components/Button/NotificationButton';
import CartButton from '../components/Button/CartButton';


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <HomeHeader {...props} />,
            headerRight: () => (
              <>
                <NotificationButton />
                <CartButton />
              </>
            ),
          }}
        />
        <Stack.Screen name="LetInScreen" component={LetInScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation