/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Main from './Main';
import History from './History';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import allReducers from "./reducers";
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

let store = createStore(allReducers);
const Stack = createStackNavigator();
interface Props {
}

interface State {
}

class Route extends React.Component<Props, State> {

  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen
                name="Main"
                component={Main}
              />
              <Stack.Screen
                name="History"
                component={History}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider></StoreProvider>
    )
  };
}


export default Route;
