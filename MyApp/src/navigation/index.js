import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LetInScreen from '../screen/Auth/LetInScreen';
import SignUpScreen from '../screen/Auth/SignUpScreen';
import SignInScreen from '../screen/Auth/SignInScreen';
import ConfirmEmailScreen from '../screen/Auth/ConfirmEmailScreen';
import BottomTabs from './bottonTabNav'
import CategoriesScreen from '../screen/Item/CategoriesScreen';
import HomeNavigator from './homeNav';

const Root = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen
          name="HomeTab"
          component={BottomTabs}
        // options={{
        //   headerTitle: (props) => <HomeHeader {...props} />,
        //   headerRight: () => (
        //     <>
        //       <NotificationButton />
        //       <CartButton />
        //     </>
        //   ),
        // }}
        />
        <Root.Screen name="LetInScreen" component={LetInScreen} />
        <Root.Screen name="SignIn" component={SignInScreen} />
        <Root.Screen name="SignUp" component={SignUpScreen} />
        <Root.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Root.Screen name="Categories" component={CategoriesScreen} />
        <Root.Screen name="HomeButtons" component={HomeNavigator} />

      </Root.Navigator>
    </NavigationContainer>
  )
}

export default Navigation