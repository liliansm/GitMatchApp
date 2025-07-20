import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { api } from '../service/api'; // certifique-se que isso tá certo
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetalhesVagaScreen({ route, navigation }) {
  
  const [vaga, setVaga] = useState(null);
  const [loading, setLoading] = useState(true);
  const { vagaId } = route.params; // Recebe o ID da vaga passada pela tela anterior
  useEffect(() => {
    
    const fetchVaga = async () => {
      try {
        const response = await api.get(`/vaga/${vagaId}`);
        if (response.status === 200) {
          setVaga(response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar vaga:', error);
        console.log('Erro', 'Não foi possível carregar os detalhes da vaga.');
      } finally {
        setLoading(false);
      }
    };

    fetchVaga();
  }, [vagaId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1d4ed8" />
      </View>
    );
  }

  if (!vaga) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Vaga não encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#1d4ed8" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{vaga.titulo}</Text>
      <Text style={styles.label}>Empresa:</Text>
      <Text style={styles.text}>{vaga.areaAtuacao}</Text>

      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.text}>{vaga.descricao}</Text>

      <Text style={styles.label}>Localização:</Text>
      <Text style={styles.text}>{vaga.localizacao}</Text>

      <Text style={styles.label}>Turno:</Text>
      <Text style={styles.text}>{vaga.turno}</Text>

      <Text style={styles.label}>Habilidades:</Text>
      {vaga.tecnologias?.length > 0 ? (
        vaga.tecnologias.map((tec, index) => (
          <Text key={index} style={styles.techItem}>• {tec}</Text>
        ))
      ) : (
        <Text style={styles.text}>Nenhuma tecnologia informada.</Text>
      )}

      <Text style={styles.label}>Data de Criação:</Text>
      <Text style={styles.text}>
        {new Date(vaga.dataCriacao).toLocaleString('pt-BR')}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3f9',
    padding: 20,
  },
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
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginTop: 12,
  },
  text: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },
  techItem: {
    fontSize: 15,
    color: '#2563eb',
    marginLeft: 8,
  },
});
