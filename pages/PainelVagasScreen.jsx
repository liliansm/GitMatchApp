import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavigationMenu from '../components/NavigationMenu';

const vagas = [
  {
    id: '1',
    titulo: 'Consultor de Mercados para Microempresas',
    empresa: 'Inova Tech',
    habilidades: ['Gestão de Projetos', 'Marketing', 'Comunicação'],
  },
  {
    id: '2',
    titulo: 'Desenvolvedor Frontend',
    empresa: 'StartUp X',
    habilidades: ['React', 'UI/UX', 'HTML/CSS'],
  },
  {
    id: '3',
    titulo: 'Analista de Dados',
    empresa: 'DataCorp',
    habilidades: ['Python', 'SQL', 'Power BI'],
  },
];

export default function PainelVagasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons name="arrow-back" size={24} color="#1d4ed8" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Painel de Vagas</Text>

      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>
              <Ionicons name="briefcase-outline" size={18} color="#1d4ed8" />{' '}
              {item.titulo}
            </Text>
            <Text style={styles.empresa}>{item.empresa}</Text>

            <View style={styles.skills}>
              {item.habilidades.map((hab, i) => (
                <Text key={i} style={styles.skill}>
                  {hab}
                </Text>
              ))}
            </View>

            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.matchButton}
                onPress={() => navigation.navigate('JobMatch')}
              >
                <Text style={styles.matchButtonText}>Match</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.linkButton}
                onPress={() => navigation.navigate('DetalhesVaga', { id: item.id })}
              >
                <Text style={styles.linkText}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <NavigationMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef3f9', padding: 20 },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#1d4ed8',
    fontWeight: '500',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
  },

  titulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },

  empresa: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 10,
  },

  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  skill: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    marginRight: 8,
    marginBottom: 6,
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    gap: 12,
  },

  matchButton: {
    backgroundColor: '#2563eb', 
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#1e40af',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  matchButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  linkButton: {
    borderWidth: 1.5,
    borderColor: '#2563eb',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linkText: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '600',
  },
});
