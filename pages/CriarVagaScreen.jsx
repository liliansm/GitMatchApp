import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

const CriarVagaScreen = () => {
  const [formData, setFormData] = useState({
    cargo: '',
    empresa: '',
    descricao: '',
    localizacao: '',
    turno: '',
    habilidades: ''
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Vaga publicada:', formData);
    // Lógica para publicar a vaga
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.header}>Criar Nova Vaga</Text>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Cargo*</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Desenvolvedor Front-end"
            value={formData.cargo}
            onChangeText={(text) => handleChange('cargo', text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Empresa*</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Inova Tech"
            value={formData.empresa}
            onChangeText={(text) => handleChange('empresa', text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Descrição da Vaga*</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Descreva as responsabilidades e benefícios..."
            multiline
            numberOfLines={4}
            value={formData.descricao}
            onChangeText={(text) => handleChange('descricao', text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Localização*</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: São Paulo - SP (Remoto)"
            value={formData.localizacao}
            onChangeText={(text) => handleChange('localizacao', text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Turno</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Horário comercial"
            value={formData.turno}
            onChangeText={(text) => handleChange('turno', text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Habilidades Necessárias*</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Liste as habilidades e requisitos técnicos..."
            multiline
            numberOfLines={4}
            value={formData.habilidades}
            onChangeText={(text) => handleChange('habilidades', text)}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Publicar Vaga</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

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
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 24,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#1A1A1A',
  },
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#2A4BA0',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    shadowColor: '#2A4BA0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CriarVagaScreen;