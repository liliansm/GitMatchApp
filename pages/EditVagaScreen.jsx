import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { api } from '../service/api';

export default function EditVagaScreen  ({ route, navigation })  {
  const { idVaga } = route.params;
  const [formData, setFormData] = useState({
    titulo: '',
    areaAtuacao: '',
    descricao: '',
    localizacao: '',
    turno: '',
    tecnologias: [],
  });

  const [techInput, setTechInput] = useState('');

  useEffect(() => {
    const fetchVaga = async () => {
      try {
        const response = await api.get(`/vaga/${idVaga}`);
        const vaga = response.data;

        setFormData({
          titulo: vaga.titulo || '',
          areaAtuacao: vaga.areaAtuacao || '',
          descricao: vaga.descricao || '',
          localizacao: vaga.localizacao || '',
          turno: vaga.turno || '',
          tecnologias: vaga.tecnologias || [],
        });
      } catch (error) {
        console.error('Erro ao buscar vaga:', error);
        Alert.alert('Erro', 'Não foi possível carregar os dados da vaga.');
      }
    };

    fetchVaga();
  }, [idVaga]);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addTech = () => {
    const tech = techInput.trim();
    if (tech && !formData.tecnologias.includes(tech)) {
      setFormData(prev => ({
        ...prev,
        tecnologias: [...prev.tecnologias, tech],
      }));
      setTechInput('');
    }
  };

  const removeTech = (techToRemove) => {
    setFormData(prev => ({
      ...prev,
      tecnologias: prev.tecnologias.filter(tech => tech !== techToRemove),
    }));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        titulo: formData.titulo,
        descricao: formData.descricao,
        areaAtuacao: formData.areaAtuacao,
        tecnologias: formData.tecnologias,
        localizacao: formData.localizacao,
        turno: formData.turno,
      };

      await api.put(`/vaga/editar/${idVaga}`, payload);
      Alert.alert('Sucesso', 'Vaga atualizada com sucesso!');
      navigation.navigate('CompanyJobs');
    } catch (error) {
      console.error('Erro ao atualizar vaga:', error);
      Alert.alert('Erro', 'Não foi possível atualizar a vaga.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1e293b" />
        </TouchableOpacity>
        <Text style={styles.header}>Editar Vaga</Text>

        <TextInput
          style={styles.input}
          placeholder="Cargo"
          value={formData.titulo}
          onChangeText={(text) => handleChange('titulo', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Área de Atuação"
          value={formData.areaAtuacao}
          onChangeText={(text) => handleChange('areaAtuacao', text)}
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          multiline
          placeholder="Descrição"
          value={formData.descricao}
          onChangeText={(text) => handleChange('descricao', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Localização"
          value={formData.localizacao}
          onChangeText={(text) => handleChange('localizacao', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Turno"
          value={formData.turno}
          onChangeText={(text) => handleChange('turno', text)}
        />

        <View style={styles.formGroup}>
          <Text style={styles.label}>Tecnologias</Text>
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
            {formData.tecnologias.map((tech, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => removeTech(tech)}
                style={styles.tag}
              >
                <Text style={styles.tagText}>{tech} ×</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EEF3F9' },
  scrollContent: { padding: 24, paddingBottom: 40 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  formGroup: { marginBottom: 20 },
  label: { fontWeight: '600', marginBottom: 8 },
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
    marginTop: 16,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});


