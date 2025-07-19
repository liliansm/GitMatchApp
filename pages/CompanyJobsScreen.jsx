// screens/CompanyJobsScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockJobs = [
  {
    id: '1',
    cargo: 'Desenvolvedor Front-end',
    local: 'Remoto',
  },
  {
    id: '2',
    cargo: 'Analista de Dados',
    local: 'São Paulo - SP',
  },
];

export default function CompanyJobsScreen({ navigation }) {
  const handleEdit = (jobId) => {
    navigation.navigate('CriarVaga', { jobId }); // Simulação
  };

  const handleDelete = (jobId) => {
    alert(`Excluir vaga com ID ${jobId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vagas da Empresa</Text>

      <FlatList
        data={mockJobs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <View>
              <Text style={styles.jobTitle}>{item.cargo}</Text>
              <Text style={styles.jobLocation}>{item.local}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleEdit(item.id)}>
                <Ionicons name="create-outline" size={24} color="#1d4ed8" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
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
  actions: { flexDirection: 'row', gap: 16 },
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
