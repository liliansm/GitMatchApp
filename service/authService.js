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
  const response = await axios.post(`${API_URL}/login`, credenciais);
  const { token } = response.data;
  await AsyncStorage.setItem('token', token);
  return response.data;
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
};
export const getToken = async () => {
  return await AsyncStorage.getItem('token');
};
