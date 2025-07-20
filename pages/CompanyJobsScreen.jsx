import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { api } from '../service/api'; // já configurada
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CompanyJobsScreen({ navigation }) {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const response = await api.get('/vaga/empresa');
        setVagas(response.data);
      } catch (error) {
        console.error('Erro ao buscar vagas:', error);
        Alert.alert('Erro', 'Não foi possível carregar as vagas.');
      }
    };

    fetchVagas();
  }, []);

  const handleDelete = async (jobId) => {
    try {
      await api.delete(`/vaga/delete/${jobId}`);
      setVagas(vagas.filter((vaga) => vaga.idVaga !== jobId));
    } catch (error) {
      console.error('Erro ao deletar vaga:', error);
      Alert.alert('Erro', 'Não foi possível excluir a vaga.');
    }
  };

  const handleEdit = (idVaga) => {
    navigation.navigate('EditVaga', { idVaga });
  };

  const handleNavigateToMatch = (idVaga) => {
    navigation.navigate('RHMatch', { idVaga });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('CompanyProfile')}>
        <Ionicons name="arrow-back" size={24} color="#1e293b" />
      </TouchableOpacity>

      <Text style={styles.title}>Vagas da Empresa</Text>

      <FlatList
        data={vagas}
        keyExtractor={(item) => item.idVaga.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.jobCard}
            onPress={() => handleNavigateToMatch(item.idVaga)} // <- clique no card branco
          >
            <View>
              <Text style={styles.jobTitle}>{item.titulo}</Text>
              <Text style={styles.jobLocation}>{item.modalidade}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleEdit(item.idVaga)}>
                <Ionicons name="create-outline" size={24} color="#1d4ed8" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.idVaga)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CriarVaga')}
      >
        <Ionicons name="add-circle-outline" size={24} color="#FFF" />
        <Text style={styles.addButtonText}>Criar nova vaga</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EEF3F9', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  list: { paddingBottom: 80 },
  jobCard: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  jobTitle: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  jobLocation: { fontSize: 14, color: '#666' },
  actions: { flexDirection: 'row', gap: 12 },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#2A4BA0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    elevation: 5,
  },
  addButtonText: { color: '#FFF', fontWeight: 'bold' },
});
