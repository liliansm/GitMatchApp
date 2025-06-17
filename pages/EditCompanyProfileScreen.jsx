import React, { useState } from 'react';
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

export default function EditCompanyProfileScreen() {
  const [name, setName] = useState('Inova Tech');
  const [slogan, setSlogan] = useState('Inovação que transforma o agora');
  const [description, setDescription] = useState(
    'Inova Tech é uma startup especializada em soluções digitais inteligentes para micro e pequenas empresas. Atuamos com consultoria tecnológica, criação de sistemas personalizados e transformação digital acessível, ajudando empreendedores a se destacarem em um mercado competitivo por meio da inovação.'
  );

  const handleSave = () => {
    Alert.alert('Sucesso', 'Perfil da empresa atualizado com sucesso!');
  };

  const handleChangeLogo = () => {
    Alert.alert('Alterar Logo', 'Selecione uma nova imagem para o logo');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
            placeholder="Digite o nome da empresa"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Slogan</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o slogan da empresa"
            value={slogan}
            onChangeText={setSlogan}
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descreva sua empresa"
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={setDescription}
          />
        </View>

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
  editLogoButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 6,
    elevation: 3,
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
});