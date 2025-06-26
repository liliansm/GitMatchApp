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
import { cadastrar } from '../service/authService';
import { Alert } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirma: '',
    github: '',
  });

  const handleChange = (name, value) => setForm({ ...form, [name]: value });

  const handleRegister = async () => {
    if (form.senha !== form.confirma) {
      return Alert.alert('Erro', 'As senhas não coincidem');
    }

    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      tipoUsuario: 'CANDIDATO',
      githubUsername: form.github,
    };

    try {
      const userData = await cadastrar(payload);
      console.log('Usuário cadastrado:', userData);
      navigation.navigate('Login'); 
    } catch (error) {
      console.error('Erro no cadastro:', error.response?.data || error.message);
      Alert.alert('Erro no cadastro', 'Verifique os dados e tente novamente.');
    }
  };

  return (
    <AuthLayout
      title="Olá"
      subtitle="Adicione seus dados"
      button={
        <TouchableOpacity
          style={styles.entrarButton}
          onPress={handleRegister}
        >
          <Text style={styles.entrarButtonText}>Criar conta</Text>
        </TouchableOpacity>
      }
    >
      <TouchableOpacity style={styles.githubButton}>
        <FontAwesome name="github" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.githubText}>Entrar com GitHub</Text>
      </TouchableOpacity>

      {['nome', 'email', 'senha', 'confirma', 'github'].map((field, idx) => (
        <TextInput
          key={idx}
          placeholder={
            field === 'nome'
              ? 'Nome'
              : field === 'email'
              ? 'E-mail'
              : field === 'senha'
              ? 'Senha'
              : field === 'confirma'
              ? 'Confirme sua senha'
              : 'Link do GitHub'
          }
          secureTextEntry={field.includes('senha')}
          style={styles.input}
          value={form[field]}
          onChangeText={(val) => handleChange(field, val)}
        />
      ))}

      <Text style={styles.terms}>
        Eu li e concordo com os{' '}
        <Text style={styles.link}>termos e políticas</Text> de uso e privacidade.
      </Text>

      <Text style={styles.footer}>
        Já tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Login
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
    marginBottom: 12,
    color: "#808080",
  },
  githubButton: {
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },
  githubText: {
    color: 'white',
    fontWeight: 'bold',
  },
  terms: {
    fontSize: 12,
    marginVertical: 10,
  },
  link: {
    color: '#1d4ed8',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 16,
    textAlign: 'center',
  },
  entrarButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    paddingHorizontal: 54,
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
