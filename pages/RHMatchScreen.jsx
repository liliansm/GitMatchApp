import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../service/api';
import { Ionicons } from '@expo/vector-icons';
import { Linking, Alert } from 'react-native'; 

export default function RHMatchScreen({ route }) {
  const navigation = useNavigation();
  const [candidatos, setCandidatos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idVaga } = route.params;

  useEffect(() => {
    const fetchCandidatos = async () => {
      try {
        
        const response = await api.get(`/vaga/empresa/candidatosVaga/${idVaga}`);
        
        setCandidatos(response.data.candidatos || []);
      } catch (error) {
        console.error('Erro ao buscar candidatos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidatos();
  }, [idVaga]);

  const abrirDetalhes = (candidato) => {
  if (!candidato.email) {
    Alert.alert('Erro', 'Este candidato não possui e-mail disponível.');
    return;
  }

  const mailtoUrl = `mailto:${candidato.email}`;

  Linking.canOpenURL(mailtoUrl)
    .then((supported) => {
      if (supported) {
        Linking.openURL(mailtoUrl);
      } else {
        Alert.alert('Erro', 'Não foi possível abrir o aplicativo de e-mail.');
      }
    })
    .catch((err) => {
      console.error('Erro ao tentar abrir e-mail:', err);
      Alert.alert('Erro', 'Não foi possível abrir o aplicativo de e-mail.');
    });
};


  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1d4ed8" />
        <Text style={{ marginTop: 12 }}>Carregando candidatos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 12 }}>
        <Ionicons name="arrow-back" size={24} color="#1e293b" />
      </TouchableOpacity>

      <Text style={styles.title}>Candidatos para a vaga</Text>

      <View style={styles.whiteContainer}>
        <FlatList
          data={candidatos}
          keyExtractor={(item) => item.github || item.email}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => abrirDetalhes(item)}>
              <Image
                source={
                  item.fotoPerfil
                    ? { uri: item.fotoPerfil }
                    : { uri: 'https://randomuser.me/api/portraits/lego/1.jpg' }
                }
                style={styles.avatar}
              />
              <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.cargo}>{item.profissao || 'Profissão não informada'}</Text>
              </View>
              <View style={styles.matchCircle}>
                <Text style={styles.matchText}>{item.compatibilidade}%</Text>
                <Text style={styles.matchLabel}>match</Text>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={{ padding: 20 }}>
              <Text style={{ textAlign: 'center', color: '#666' }}>
                Nenhum candidato encontrado para essa vaga.
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef3f9' },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
