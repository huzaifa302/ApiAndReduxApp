import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import store from './src/Redux/services/store';
import { navigationRef } from './src/Navigation/NavService';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      <AppNavigation />
      <FlashMessage position={'top'} />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
