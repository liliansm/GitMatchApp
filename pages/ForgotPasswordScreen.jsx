import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AuthLayout from '../components/AuthLayout';
import axios from 'axios';
import{API_BASE_URL} from '../config';
import { Alert } from 'react-native';


export default function ForgotPasswordScreen({ navigation }) {
  const [isSending, setIsSending] = useState(false);
  const api_url = API_BASE_URL + '/email'
  const [email, setEmail] = useState('');

  const enviarCodigo = async () => {
  if (!email.trim()) {
    Alert.alert('Erro', 'Por favor, digite um e-mail válido.');
    return;
  }

  if (isSending) return; 

  setIsSending(true);

  try {
    await axios.post(`${API_BASE_URL}/email/enviar-codigo`, { to: email });
    Alert.alert('Sucesso', 'Código enviado com sucesso!');
    navigation.navigate('ResetCode', { email });
  } catch (err) {
    Alert.alert('Erro', err.response?.data || 'Erro ao enviar código');
  } finally {
    setIsSending(false); 
  }
};


  return (
    <AuthLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Recuperar Senha</Text>
        <Text style={styles.subtitle}>
          Digite o e-mail da sua conta e enviaremos um código de verificação.
        </Text>

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
  style={[styles.sendButton, isSending && { opacity: 0.5 }]}
  onPress={enviarCodigo}
  disabled={isSending}
>
  <Text style={styles.sendButtonText}>
    {isSending ? 'Enviando...' : 'Enviar código'}
  </Text>
</TouchableOpacity>

        <Text style={styles.backText} onPress={() => navigation.goBack()}>
          Voltar para login
        </Text>
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
    color: "#808080",
  },
  sendButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backText: {
    color: '#1d4ed8',
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
