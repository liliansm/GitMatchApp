import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AuthLayout from '../components/AuthLayout';

export default function ResetCodeScreen({ navigation }) {
  const [code, setCode] = useState('');

  return (
    <AuthLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Digite o Código</Text>
        <Text style={styles.subtitle}>
          Enviamos um código para seu e-mail. Digite-o abaixo para redefinir sua senha.
        </Text>

        <TextInput
          placeholder="Código de verificação"
          style={styles.input}
          value={code}
          onChangeText={setCode}
        />

        <TouchableOpacity
          style={styles.verifyButton}
           onPress={() => navigation.navigate('NewPassword')}
        >
          <Text style={styles.verifyButtonText}>Verificar código</Text>
        </TouchableOpacity>

        <Text style={styles.backText} onPress={() => navigation.goBack()}>
          Voltar
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
  },
  verifyButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  verifyButtonText: {
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
