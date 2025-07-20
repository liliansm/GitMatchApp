import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const NavigationMenu = ({ activeTab }) => {
  const navigation = useNavigation();
  const [tipoUsuario, setTipoUsuario] = useState(null);

  useEffect(() => {
    const fetchTipo = async () => {
      const tipo = await AsyncStorage.getItem('tipoUsuario');
      setTipoUsuario(tipo);
    };
    fetchTipo();
  }, []);

  const handleNavigateToProfile = () => {
    if (tipoUsuario === 'EMPRESA') {
      navigation.navigate('CompanyProfile');
    } else {
      navigation.navigate('Profile');
    }
  };

  const handleNavigateToVaga = () => {
    if (tipoUsuario === 'EMPRESA') {
      navigation.navigate('CompanyJobs');
    } else {
      navigation.navigate('PainelVagas');
    }
  };


  return (
    <LinearGradient 
      colors={['#0f172a', '#1d4ed8']} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.footer}
    >
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons 
          name={activeTab === 'Home' ? 'home' : 'home-outline'} 
          size={24} 
          color="#fff" 
        />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => navigation.navigate('Notification')}
      >
        <Ionicons 
          name={activeTab === 'notifications' ? 'notifications' : 'notifications-outline'} 
          size={24} 
          color="#fff" 
        />
        <Text style={styles.tabText}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tab} 
        onPress={handleNavigateToVaga}
      >
        <MaterialIcons 
          name={activeTab === 'jobs' ? 'work' : 'work-outline'} 
          size={24} 
          color="#fff" 
        />
        <Text style={styles.tabText}>Vagas</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tab} 
        onPress={handleNavigateToProfile}
        disabled={!tipoUsuario} // evita clicar antes de carregar
      >
        <FontAwesome 
          name={activeTab === 'profile' ? 'user' : 'user-o'} 
          size={24} 
          color="#fff" 
        />
        <Text style={styles.tabText}>Perfil</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  tabText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});

export default NavigationMenu;
