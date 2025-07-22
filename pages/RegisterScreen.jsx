import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AuthLayout from '../components/AuthLayout';
import { cadastrar } from '../service/authService';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirma: '',
    github: '',
    cnpj: '',
  });

  const [isEmpresa, setIsEmpresa] = useState(false);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleRegister = async () => {
    if (form.senha !== form.confirma) {
      return Alert.alert('Erro', 'As senhas não coincidem');
    }

    const payload = {
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      tipoUsuario: isEmpresa ? 'EMPRESA' : 'CANDIDATO',
      ...(isEmpresa
        ? { cnpj: form.cnpj }
        : { githubUsername: form.github }),
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
        <TouchableOpacity style={styles.entrarButton} onPress={handleRegister}>
          <Text style={styles.entrarButtonText}>Criar conta</Text>
        </TouchableOpacity>
      }
    >
      <TouchableOpacity style={styles.githubButton}>
        <FontAwesome name="github" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.githubText}>Entrar com GitHub</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={form.nome}
        onChangeText={(val) => handleChange('nome', val)}
      />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={form.email}
        onChangeText={(val) => handleChange('email', val)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={form.senha}
        onChangeText={(val) => handleChange('senha', val)}
      />
      <TextInput
        placeholder="Confirme sua senha"
        secureTextEntry
        style={styles.input}
        value={form.confirma}
        onChangeText={(val) => handleChange('confirma', val)}
      />

      {/* Campo condicional: GitHub (Candidato) ou CNPJ (Empresa) */}
      {isEmpresa ? (
        <TextInput
          placeholder="CNPJ"
          style={styles.input}
          value={form.cnpj}
          onChangeText={(val) => handleChange('cnpj', val)}
          keyboardType="numeric"
        />
      ) : (
        <TextInput
          placeholder="Github Username"
          style={styles.input}
          value={form.github}
          onChangeText={(val) => handleChange('github', val)}
        />
      )}

      {/* Switch de tipo de usuário */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchTipo}>{isEmpresa ? 'Empresa' : 'Candidato'}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#1d4ed8' }}
          thumbColor="#f4f3f4"
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsEmpresa}
          value={isEmpresa}
        />
      </View>

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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  switchTipo: {
    fontWeight: '700',
    fontSize: 16,
    color: '#1d4ed8',
    marginRight: 12,
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
