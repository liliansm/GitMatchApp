import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen';
import ConfirmCodeScreen from './pages/ConfirmCodeScreen';
import NewPasswordScreen from './pages/NewPasswordScreen';
import HomeScreen from './pages/HomeScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetCode" component={ConfirmCodeScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}