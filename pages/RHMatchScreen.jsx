// RHMatchScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const candidatos = [
  {
    id: '1',
    nome: 'Sara Castanho',
    cargo: 'Engenharia de Software',
    match: '85%',
    foto: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
    habilidades: ['React', 'Node.js', 'PostgreSQL'],
    experiencia: '3 anos na empresa X',
  },
  {
    id: '2',
    nome: 'Carlos Silva',
    cargo: 'Analista de Dados',
    match: '85%',
    foto: { uri: 'https://randomuser.me/api/portraits/men/32.jpg' },
    habilidades: ['Python', 'SQL', 'Power BI'],
    experiencia: '2 anos na empresa Y',
  },
  // Adicione mais candidatos se quiser
];

export default function RHMatchScreen() {
  const navigation = useNavigation();

  const abrirDetalhes = (candidato) => {
    navigation.navigate('CandidatoDetalhes', { candidato });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Engenheiro(a) de Software</Text>
      <View style={styles.whiteContainer}>
        <FlatList
          data={candidatos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => abrirDetalhes(item)}>
              <Image source={item.foto} style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.cargo}>{item.cargo}</Text>
              </View>
              <View style={styles.matchCircle}>
                <Text style={styles.matchText}>{item.match}</Text>
                <Text style={styles.matchLabel}>match</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef3f9' },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 24,
    marginLeft: 24,
    color: '#1a1a1a',
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 24,
    marginTop: 20,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#f0f0f0',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  cargo: {
    fontSize: 14,
    color: '#666',
  },
  matchCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: '#1d4ed8',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  matchText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  matchLabel: {
    fontSize: 12,
    color: '#666',
  },
});
