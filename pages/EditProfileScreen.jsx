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
import { useNavigation } from '@react-navigation/native';
import { api } from '../service/api';

export default function EditProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [bio, setBio] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const carregarDadosUsuario = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        if (!userId) return;

        const response = await api.get(`/usuario/usuarios/${userId}`);
        const user = response.data;

        setName(user.nome || '');
        setEmail(user.email || '');
        setProfession(user.profissao || '');
        setBio(user.bio || '');
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      }
    };

    carregarDadosUsuario();
  }, []);

  const handleSave = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (!userId) throw new Error('Usuário não autenticado.');

      const payload = {
        nome: name,
        email: email,
        profissao: profession,
        bio: bio,
      };

      await api.put(`/usuario/${userId}`, payload);

      setSuccessMessage('Perfil alterado com sucesso!');
      setTimeout(() => setSuccessMessage(''), 3000); // Esconde após 3 segundos

    } catch (error) {
      console.error('Erro ao atualizar perfil:', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível atualizar o perfil.');
    }
  };

  const handleAttachCV = () => {
    Alert.alert('Anexar Currículo', 'Selecione o arquivo do currículo');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#2A4BA0" />
        </TouchableOpacity>

        <Text style={styles.title}>Editar Perfil</Text>

        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Profissão</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua profissão"
            value={profession}
            onChangeText={setProfession}
          />

          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            placeholder="Fale um pouco sobre você"
            multiline
            numberOfLines={4}
            value={bio}
            onChangeText={setBio}
          />

          <Text style={styles.label}>Currículo</Text>
          <TouchableOpacity style={styles.attachButton} onPress={handleAttachCV}>
            <Ionicons name="attach" size={20} color="#2A4BA0" />
            <Text style={styles.attachButtonText}>Anexar Currículo</Text>
          </TouchableOpacity>
        </View>

        {successMessage !== '' && (
          <Text style={styles.successMessage}>{successMessage}</Text>
        )}

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#EEF3F9',
    paddingHorizontal: 24,
    paddingTop: 24,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 16,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 24,
    textAlign: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
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
    marginTop: 12,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#1A1A1A',
  },
  bioInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  attachButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    marginTop: 8,
  },
  attachButtonText: {
    fontSize: 16,
    color: '#2A4BA0',
    marginLeft: 8,
    fontWeight: '500',
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





