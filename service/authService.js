import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../config'; 

const API_URL = `${API_BASE_URL}/usuario`;

export const cadastrar = async (usuario) => {
  const response = await axios.post(`${API_URL}/register`, usuario);
  const { token } = response.data;
  await AsyncStorage.setItem('token', token);
  return response.data;
};

export const login = async (credenciais) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credenciais);

    const { token, idUsuario, nome, tipoUsuario } = response.data;

    // Armazenar no AsyncStorage
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('userId', String(idUsuario));
    await AsyncStorage.setItem('nomeUsuario', nome);
    await AsyncStorage.setItem('tipoUsuario', tipoUsuario);

    return response.data;
  } catch (error) {
    // Log para depuração
    console.error('Erro no login:', error.response?.data || error.message);

    // Propaga erro para ser tratado no componente (ex: Alert)
    throw new Error('E-mail ou senha inválidos');
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem('userId');
  await AsyncStorage.removeItem('token');
};
export const getToken = async () => {
  return await AsyncStorage.getItem('token');
};
