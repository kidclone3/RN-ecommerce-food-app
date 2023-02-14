import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LetInScreen from '../screen/Auth/LetInScreen';
import SignUpScreen from '../screen/Auth/SignUpScreen';
import SignInScreen from '../screen/Auth/SignInScreen';
import ConfirmEmailScreen from '../screen/Auth/ConfirmEmailScreen';
import BottomTabs from './bottonTabNav'
import CategoriesScreen from '../screen/Item/CategoriesScreen';
import { ResetPassword, SendMailResetPassword } from '../screen/Auth/ForgotPassword';

const Root = createNativeStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen name="LetInScreen" component={LetInScreen} />
        <Root.Screen name="SignIn" component={SignInScreen} />
        <Root.Screen name="SignUp" component={SignUpScreen} />
        <Root.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Root.Screen
          name="HomeTab"
          component={BottomTabs} />
        <Root.Screen name="Categories" component={CategoriesScreen} />
        {/* <Root.Screen name="MyCart" component={MyCartScreen} /> */}
        <Root.Screen name='SendMailResetPassword' component={SendMailResetPassword} />
        <Root.Screen name='ResetPassword' component={ResetPassword} />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default Navigation