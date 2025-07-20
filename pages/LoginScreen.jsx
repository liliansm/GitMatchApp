import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AuthLayout from '../components/AuthLayout';
import { login } from '../service/authService';
import { api } from '../service/api';
import * as AuthSession from 'expo-auth-session';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const clientId = 'Ov23liUE5QNMj8m8pOYA';

  // Usar proxy no desenvolvimento local/expo go
  // const redirectUri = AuthSession.makeRedirectUri({
  //   useProxy: true,
  //   scheme: 'gitmatch',
  // });

 const redirectUri = AuthSession.makeRedirectUri({
  useProxy: true,
  scheme: 'gitmatch',
});


  console.log('redirectUri:', redirectUri);

  const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
  };

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId,
      scopes: ['read:user', 'user:email'],
      redirectUri,
    },
    discovery
  );

  useEffect(() => {
    if (result) {
      console.log('AuthSession result:', result);

      if (result.type === 'success' && result.params.code) {
        const code = result.params.code;
        (async () => {
          setLoading(true);
          try {
            const response = await api.get(`/api/oauth/github/callback?code=${code}`);
            const { usuario } = response.data;

            if (usuario) {
              // Navega para a tela certa com o usuário
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name:
                      usuario.tipoUsuario === 'CANDIDATO'
                        ? 'Profile'
                        : 'CompanyProfile',
                    params: { user: usuario },
                  },
                ],
              });
            } else {
              Alert.alert('Erro', 'Não foi possível autenticar via GitHub');
            }
          } catch (error) {
            console.error('Erro na autenticação GitHub:', error);
            Alert.alert('Erro', 'Falha na autenticação GitHub');
          } finally {
            setLoading(false);
          }
        })();
      } else if (result.type === 'error') {
        Alert.alert('Erro', 'Falha na autenticação GitHub');
      }
    }
  }, [result]);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha e-mail e senha');
      return;
    }
    setLoading(true);
    try {
      const data = await login({ email, senha });
      console.log('Login bem-sucedido:', data);

      if (data.tipoUsuario === 'CANDIDATO') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Profile', params: { user: data } }],
        });
      } else if (data.tipoUsuario === 'EMPRESA') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'CompanyProfile', params: { user: data } }],
        });
      } else {
        Alert.alert('Erro', 'Tipo de usuário desconhecido');
      }
    } catch (error) {
      Alert.alert('Erro', 'E-mail ou senha inválidos');
    } finally {
      setLoading(false);
    }
  };

  const gitHubLogin = async () => {
    setLoading(true);
    try {
      await promptAsync();
      // Não desliga loading aqui pois o resultado virá no useEffect
    } catch {
      Alert.alert('Erro', 'Falha ao iniciar autenticação GitHub');
      setLoading(false);
    }
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
      <TouchableOpacity
        style={styles.githubButton}
        onPress={gitHubLogin}
        disabled={loading || !request}
      >
        <FontAwesome
          name="github"
          size={20}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.githubText}>Entrar com GitHub</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        editable={!loading}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        editable={!loading}
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
    color: '#808080',
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
