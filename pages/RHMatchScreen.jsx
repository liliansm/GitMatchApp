import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';

const candidatos = [
  {
    id: '1',
    nome: 'Sara Castanho',
    cargo: 'Engenharia de Software',
    match: '85%',
    foto: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
  },
  { 
    id: '2', 
    nome: 'Carlos Silva', 
    cargo: 'Analista de Dados', 
    match: '85%', 
    foto: { uri: 'https://randomuser.me/api/portraits/men/32.jpg' } 
  },
  { 
    id: '3', 
    nome: 'Luana Marques', 
    cargo: 'Dev FrontEnd', 
    match: '85%', 
    foto: { uri: 'https://randomuser.me/api/portraits/women/68.jpg' } 
  },
  { 
    id: '4', 
    nome: 'Jorge Lima', 
    cargo: 'Dev BackEnd', 
    match: '85%', 
    foto: { uri: 'https://randomuser.me/api/portraits/men/75.jpg' } 
  },
];

const RHMatchScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Engenheiro(a) de Software</Text>
    
    {/* Container branco com bordas arredondadas no topo */}
    <View style={styles.whiteContainer}>
      <FlatList
        data={candidatos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.foto} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.cargo}>{item.cargo}</Text>
            </View>
            <View style={styles.matchCircle}>
              <Text style={styles.matchText}>{item.match}</Text>
              <Text style={styles.matchLabel}>match</Text>
            </View>
          </View>
        )}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#eef3f9',
  },
  title: { 
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 24,
    marginLeft: 24,
    color: '#1a1a1a'
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 24,
    marginTop: 20, // Começa após o meio da tela
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

export default RHMatchScreen;