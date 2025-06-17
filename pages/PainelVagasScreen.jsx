import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const vagas = [
  {
    id: '1',
    titulo: 'Consultor de Mercados para Microempresas',
    empresa: 'Inova Tech',
    habilidades: ['Gestão de Projetos', 'Marketing', 'Comunicação'],
  },
  { id: '2', },
  { id: '3', }
];

const PainelVagasScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Painel De Vagas</Text>
    <FlatList
      data={vagas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.empresa}>{item.empresa}</Text>
          <View style={styles.skills}>
            {item.habilidades.map((hab, i) => (
              <Text key={i} style={styles.skill}>{hab}</Text>
            ))}
          </View>
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef3f9', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  titulo: { fontSize: 16, fontWeight: '600' },
  empresa: { fontSize: 12, color: 'gray', marginBottom: 10 },
  skills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  skill: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
  },
});

export default PainelVagasScreen;
