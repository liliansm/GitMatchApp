import React, { useEffect,useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AuthLayout from '../components/AuthLayout';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { Alert } from 'react-native';

export default function NewPasswordScreen({ navigation,route }) {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subtitle, setSubtitle] = useState('Digite a nova senha e confirme para atualizar sua conta.');


  useEffect(() => {
        setEmail(route.params.email); // Armazena o e-mail da tela anterior
        setCode(route.params.codigo); // Armazena o código da tela anterior
      
    }, []);


    const alterarSenha = async () => {


    if(newPassword !== confirmPassword) {
      setSubtitle('As senhas não coincidem. Tente novamente.');
    }else{
      setSubtitle('Alterando senha, aguarde...');
      await axios.post(`${API_BASE_URL}/email/trocar-senha`, { email: email, codigo: code, novaSenha: newPassword }).then(response => {
        console.log('Senha alterada com sucesso:', response.data);
        Alert.alert('Sucesso', 'Senha alterada com sucesso!');
        setSubtitle('Senha alterada com sucesso!');
        navigation.navigate('Login'); // Navega para a tela de login
      }).catch(error => {
        console.error('Erro ao alterar senha:', error.response?.data || error.message);
        Alert.alert('Erro', 'Falha ao alterar senha. Verifique o código e tente novamente.');
      });

    }
   
    } 

  return (
    <AuthLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Nova Senha</Text>
        <Text style={[styles.subtitle, subtitle === 'As senhas não coincidem. Tente novamente.' && { color: 'red',fontWeight: 'bold'  }]}>
          {subtitle}
        </Text>
    

        <TextInput
          placeholder="Nova senha"
          style={styles.input}
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <TextInput
          placeholder="Confirmar nova senha"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={alterarSenha}
        >
          <Text style={styles.buttonText}>Salvar nova senha</Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
