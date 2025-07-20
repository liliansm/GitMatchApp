import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../service/api';

export default function EditCompanyProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const carregarEmpresa = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        if (!userId) return;

        const response = await api.get(`/usuario/usuarios/${userId}`);
        const data = response.data;

        setName(data.nome || '');
        setSlogan(data.profissao || '');
        setDescription(data.bio || '');
      } catch (error) {
        console.error('Erro ao carregar dados da empresa:', error);
        Alert.alert('Erro', 'Não foi possível carregar os dados da empresa.');
      }
    };

    carregarEmpresa();
  }, []);

  const handleSave = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (!userId) return;

      const payload = {
        nome: name,
        profissao: slogan,
        bio: description,
      };

      await api.put(`/usuario/${userId}`, payload);

      setSuccessMessage('Perfil da empresa atualizado com sucesso!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível atualizar o perfil da empresa.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1e293b" />
        </TouchableOpacity>

        <Text style={styles.title}>Editar Perfil da Empresa</Text>

        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://i.imgur.com/V9gTjFh.png' }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome da Empresa</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Digite o nome da empresa"
          />

          <Text style={styles.label}>Slogan</Text>
          <TextInput
            style={styles.input}
            value={slogan}
            onChangeText={setSlogan}
            placeholder="Digite o slogan da empresa"
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Descreva sua empresa"
            multiline
            numberOfLines={5}
          />
        </View>

        {successMessage !== '' && (
          <Text style={styles.successMessage}>{successMessage}</Text>
        )}

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F9',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 32,
    textAlign: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32,
    position: 'relative',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  formContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#1A1A1A',
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#2A4BA0',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#2A4BA0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginTop: 16,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  successMessage: {
    backgroundColor: '#D1FAE5',
    color: '#065F46',
    textAlign: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    fontWeight: '500',
  },
});
