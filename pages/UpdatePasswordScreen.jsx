import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AuthLayout from '../components/AuthLayout';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../config';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de instalar: expo install @expo/vector-icons

export default function UpdatePasswordScreen({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdatePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("token");

      await axios.put(
        `${API_BASE_URL}/usuario/alterar-senha`,
        {
          senhaAtual: currentPassword,
          novaSenha: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      Alert.alert("Sucesso", "Senha atualizada com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error(error.response?.data || error.message);
      Alert.alert("Erro", "Falha ao atualizar a senha. Verifique a senha atual.");
    }
  };

  return (
    <AuthLayout>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1d4ed8" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Atualizar Senha</Text>
      </View>

      <View style={styles.container}>
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
          style={[
            styles.button,
            (!currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword) && styles.buttonDisabled
          ]}
          onPress={handleUpdatePassword}
          disabled={
            !currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword
          }
        >
          <Text style={styles.buttonText}>Atualizar senha</Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  container: {
    paddingHorizontal: 8,
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
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#9bbcf2',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
