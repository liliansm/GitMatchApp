// CandidatoDetalhesScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native'; // Você pode usar outro ícone se quiser

export default function CandidatoDetalhesScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { candidato } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={28} color="#1d4ed8" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil do Candidato</Text>
      </View>

      <View style={styles.content}>
        <Image source={candidato.foto} style={styles.avatar} />
        <Text style={styles.nome}>{candidato.nome}</Text>
        <Text style={styles.cargo}>{candidato.cargo}</Text>

        <Text style={styles.label}>Habilidades:</Text>
        {candidato.habilidades.map((hab, index) => (
          <Text key={index} style={styles.item}>• {hab}</Text>
        ))}

        <Text style={styles.label}>Experiência:</Text>
        <Text style={styles.item}>{candidato.experiencia}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#f8fafc',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1d4ed8',
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#1d4ed8',
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 4,
  },
  cargo: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginTop: 16,
  },
  item: {
    alignSelf: 'flex-start',
    fontSize: 15,
    color: '#334155',
    marginTop: 4,
  },
});
