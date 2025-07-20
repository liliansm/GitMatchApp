import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { api } from '../service/api'; // ajuste o caminho conforme seu projeto

const CriarVagaScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    cargo: '',
    empresa: '',
    descricao: '',
    localizacao: '',
    turno: '',
    habilidades: [],
  });

  const [techInput, setTechInput] = useState('');

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addTech = () => {
    const tech = techInput.trim();
    if (tech && !formData.habilidades.includes(tech)) {
      setFormData(prev => ({
        ...prev,
        habilidades: [...prev.habilidades, tech],
      }));
      setTechInput('');
    }
  };

  const removeTech = (techToRemove) => {
    setFormData(prev => ({
      ...prev,
      habilidades: prev.habilidades.filter(tech => tech !== techToRemove),
    }));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        titulo: formData.cargo,
        descricao: formData.descricao,
        areaAtuacao: formData.empresa,
        tecnologias: formData.habilidades,
        localizacao: formData.localizacao,
        turno: formData.turno,
      };

      const response = await api.post('/vaga/criar', payload);
      
      Alert.alert('Sucesso', 'Vaga publicada com sucesso!');
      navigation.navigate('CompanyJobs');
    } catch (error) {
      console.error('Erro ao criar vaga:', error);
      Alert.alert('Erro', 'Não foi possível criar a vaga.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1e293b" />
        </TouchableOpacity>
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
          <Text style={styles.label}>Área de Atuação*</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Tecnologia, Design, etc."
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

        {/* Campo para adicionar tecnologias */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Habilidades Necessárias*</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Digite uma tecnologia"
              value={techInput}
              onChangeText={setTechInput}
              onSubmitEditing={addTech}
              returnKeyType="done"
            />
            <TouchableOpacity onPress={addTech} style={styles.addTechButton}>
              <Text style={styles.addTechButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tagsContainer}>
            {formData.habilidades.map((tech, i) => (
              <TouchableOpacity
                key={i}
                style={styles.tag}
                onPress={() => removeTech(tech)}
                activeOpacity={0.7}
              >
                <Text style={styles.tagText}>{tech} ×</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  addTechButton: {
    backgroundColor: '#2A4BA0',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginLeft: 8,
  },
  addTechButtonText: {
    color: '#FFF',
    fontWeight: '600',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  tag: {
    backgroundColor: '#2A4BA0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#fff',
    fontWeight: '600',
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
