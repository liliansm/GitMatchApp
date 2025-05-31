import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AuthLayout from '../components/AuthLayout';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

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
          style={styles.sendButton}
          onPress={() => navigation.navigate('ResetCode')}
        >
          <Text style={styles.sendButtonText}>Enviar código</Text>
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
