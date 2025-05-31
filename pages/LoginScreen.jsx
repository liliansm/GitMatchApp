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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <AuthLayout
      title="Bem-vindo de volta!"
      subtitle="Entre com seus dados para continuar"
      button={
        <TouchableOpacity
          style={styles.entrarButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.entrarButtonText}>Entrar</Text>
        </TouchableOpacity>
      }
    >
      <TouchableOpacity style={styles.githubButton}>
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
