/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import {useEffect, useState} from 'react';
import store from './src/reducers';
import { navigationRef } from './src/services/navRef';
import {getAuthAsyncStorage} from './src/services/getAuthAsyncStorage';
import Navigation from './src/navigation/Navigation';
import { loggedIn } from './src/actions/auth';


function App() {
  const [isLoading, setIsLoadingFromAsyncStorage] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      await setIsLoadingFromAsyncStorage(true);
      const userStorage = await getAuthAsyncStorage();
      if (userStorage.user && userStorage.token) {
        await store.dispatch(loggedIn({
          user: userStorage.user,
          token: userStorage.token,
        }));
      }
      await setIsLoadingFromAsyncStorage(false);
    }
    load()
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    </Provider>
    
  );
}
const styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default App;
