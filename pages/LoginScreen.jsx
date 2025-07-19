import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AuthLayout from '../components/AuthLayout';
import { login } from '../service/authService';
import { Alert } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      console.log('Erro', 'Preencha e-mail e senha');
      return;
    }
    setLoading(true);
    try {
      const data = await login({ email, senha }); 
      console.log('Login bem-sucedido:',data);
      navigation.navigate('Profile', { user: data }); // Navega para a tela de perfil com os dados do usuário

    } catch (error) {
      
      console.log('Erro', 'E-mail ou senha inválidos');
    } finally {
      setLoading(false);
    }
  };

 const gitHubLogin = async () => {
    if (!email || !senha) {
      console.log('Erro', 'Preencha e-mail e senha');
      return;
    }
    setLoading(true);
      await axios.get(`${API_BASE_URL}/api/oauth/github/login`,{ email, senha }).then(response => {
        console.log('Login bem-sucedido:', response.data);
        const { usuario: { idUsuario, nome, email: emailUsuario, tipoUsuario, token }, mensagem } = response.data;
        navigation.navigate('Profile', { 

             idUsuario: idUsuario,
            nome: nome,
          emailUsuario: emailUsuario,
        token: token,


         }); // Navega para a tela de perfil com os dados do usuário
      }).catch(error => {
        console.error('Erro ao fazer login:', error.response?.data || error.message);
        Alert.alert('Erro', 'E-mail ou senha inválidos');
      })

       setLoading(false);
  };


  return (
    <AuthLayout
      title="Bem-vindo de volta!"
      subtitle="Entre com seus dados para continuar"
      button={
        <TouchableOpacity
          style={styles.entrarButton}
          onPress={handleLogin}
          disabled={loading}
        >
          
          <Text style={styles.entrarButtonText}>
            {loading ? 'Entrando...' : 'Entrar'}
          </Text>
        </TouchableOpacity>
      }
    >
      <TouchableOpacity style={styles.githubButton}  onPress={gitHubLogin}>
        <FontAwesome name="github" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.githubText}>Entrar com GitHub</Text>

      </TouchableOpacity>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Não tem conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
          Cadastre-se
        </Text>
      </Text>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    color: "#808080",
  },
  githubButton: {
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 18,
    marginTop: 20,
  },
  githubText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: '#3361B6',
    marginVertical: 8,
    textAlign: 'right',
    borderRadius: 6,
  },
  footer: {
    marginTop: 16,
    textAlign: 'center',
  },
  entrarButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    paddingHorizontal: 68,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 10,
  },
  entrarButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
