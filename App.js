import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen';
import ConfirmCodeScreen from './pages/ConfirmCodeScreen';
import NewPasswordScreen from './pages/NewPasswordScreen';
import HomeScreen from './pages/HomeScreen';
import JobMatchScreen from './pages/JobMatchScreen'; 
import SuggestedJobsScreen from './pages/SuggestedJobsScreen';


//Telas Matheus

import ProfileScreen from './pages/ProfileScreen'
import EditProfileScreen from './pages/EditProfileScreen';
import CompanyProfileScreen from './pages/CompanyProfileScreen';
import EditCompanyProfileScreen from './pages/EditCompanyProfileScreen';
import NotificationsScreen from './pages/NotificationScreen';

// NOVAS TELAS
// import PainelVagasScreen from './pages/PainelVagasScreen';
import CriarVagaScreen from './pages/CriarVagaScreen';
import RHMatchScreen from './pages/RHMatchScreen';
import UpdatePasswordScreen from './pages/UpdatePasswordScreen';

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
        <Stack.Screen name="JobMatch" component={JobMatchScreen} />
        <Stack.Screen name="SuggestedJobs" component={SuggestedJobsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="PainelVagas" component={PainelVagasScreen} /> */}
        <Stack.Screen name="CriarVaga" component={CriarVagaScreen} />
        <Stack.Screen name="RHMatch" component={RHMatchScreen} />
        <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// export default function App() {
//   // Teste temporário da tela de notificações
//   return (
//     <LoginScreen />
    
//   );
// }

