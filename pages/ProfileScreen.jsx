import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfileSection from '../components/ProfileSection';
import NavigationMenu from '../components/NavigationMenu';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../service/api';
import { API_BASE_URL } from '../config';



export default function ProfileScreen({ navigation }) {
  const [userData, setUserData] = useState({
    nome: 'Carregando...',
    githubUsername: '',
    profissao: '',
    fotoPerfil: '',
    tecnologias: [],
    bio: '',
  });

  const [loading, setLoading] = useState(false);

  // Função para buscar tecnologias do backend
  const buscarTecnologias = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('Usuário não autenticado');

      const response = await axios.get(`${API_BASE_URL}/vaga/usuario/tecnologias`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data; // lista de tecnologias
    } catch (error) {
      console.error('Erro ao buscar tecnologias:', error.response?.data || error.message);
      throw error;
    }
  };

  // Opcional: Buscar dados do usuário pelo id armazenado no AsyncStorage
  const buscarDadosUsuario = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      console.log("Token enviado:", token);
      console.log("User ID enviado:", userId);
      if (!token || !userId) throw new Error('Usuário não autenticado');

      const response = await api.get(`/usuarios/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error.response?.data || error.message);
      throw error;
    }
  };

  useEffect(() => {
    async function carregarDados() {
      setLoading(true);
      try {
        // Buscar tecnologias e dados do usuário em paralelo
        const [tecnologias, dadosUsuario] = await Promise.all([
          buscarTecnologias(),
          buscarDadosUsuario(),
        ]);

        // Ajusta os dados para seu formato
        setUserData({
          nome: dadosUsuario.nome || '',
          githubUsername: dadosUsuario.githubUsername || '',
          profissao: dadosUsuario.profissao || '',
          fotoPerfil: dadosUsuario.fotoPerfil || '',
          tecnologias: tecnologias || [],
          bio: dadosUsuario.bio || '',
        });
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados do perfil.');
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="menu" size={28} color="#1d4ed8" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#1d4ed8" />
        ) : (
          <ProfileSection user={userData} navigation={navigation} />
        )}
      </ScrollView>
      <NavigationMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F9',
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#EEF3F9',
  },
  content: {
    paddingBottom: 100,
  },
});
