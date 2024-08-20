import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../Screens/AuthStack/SignIn';
import SignUp from '../Screens/AuthStack/SignUp';
import Home from '../Screens/MainStack/Home';
import ForgetPassword from '../Screens/AuthStack/ForgetPassword';
import TabBar from './Bottom';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="AuthStack">
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={TabBar} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
