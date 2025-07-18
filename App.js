import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas de Autenticação
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen';
import ConfirmCodeScreen from './pages/ConfirmCodeScreen';
import NewPasswordScreen from './pages/NewPasswordScreen';
import UpdatePasswordScreen from './pages/UpdatePasswordScreen';

// Telas Principais
import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import EditProfileScreen from './pages/EditProfileScreen';
import CompanyProfileScreen from './pages/CompanyProfileScreen';
import EditCompanyProfileScreen from './pages/EditCompanyProfileScreen';
import SuggestedJobsScreen from './pages/SuggestedJobsScreen';
import JobMatchScreen from './pages/JobMatchScreen';
import RHMatchScreen from './pages/RHMatchScreen';
// import PainelVagasScreen from './pages/PainelVagasScreen';
import NotificationScreen from './pages/NotificationScreen';
import CriarVagaScreen from './pages/CriarVagaScreen';
import SettingsScreen from './pages/SettingsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {/* Autenticação */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetCode" component={ConfirmCodeScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />

        {/* Telas Principais */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="CompanyProfile" component={CompanyProfileScreen} />
        <Stack.Screen name="EditCompanyProfile" component={EditCompanyProfileScreen} />
        <Stack.Screen name="SuggestedJobs" component={SuggestedJobsScreen} />
        <Stack.Screen name="JobMatch" component={JobMatchScreen} />
        <Stack.Screen name="RHMatch" component={RHMatchScreen} />
        <Stack.Screen name="CriarVaga" component={CriarVagaScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        {/* <Stack.Screen name="PainelVagas" component={PainelVagasScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
