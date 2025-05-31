// UpdatePasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AuthLayout from '../components/AuthLayout';

export default function UpdatePasswordScreen({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <AuthLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Atualizar Senha</Text>
        <Text style={styles.subtitle}>
          Para sua segurança, confirme sua senha atual antes de atualizar.
        </Text>

        <TextInput
          placeholder="Senha atual"
          style={styles.input}
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />

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
          onPress={() => {
            alert('Senha atualizada com sucesso!');
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Atualizar senha</Text>
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
