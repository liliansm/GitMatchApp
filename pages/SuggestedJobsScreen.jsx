import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, ActivityIndicator, Alert } from 'react-native';
import NavigationMenu from '../components/NavigationMenu';
import JobCard from '../components/JobCard';
import { api } from '../service/api'; // Assumindo que você tenha axios configurado aqui
import AsyncStorage from '@react-native-async-storage/async-storage';
const SuggestedJobsScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchJobs = async () => {
    try {
      setLoading(true);

      const techResponse = await api.get('/vaga/usuario/tecnologias');
      const tecnologias = techResponse.data;

      if (!Array.isArray(tecnologias) || tecnologias.length === 0) {
        Alert.alert('Nenhuma tecnologia', 'Não foram encontradas tecnologias cadastradas no perfil.');
        setJobs([]);
        return;
      }

      const vagasResponse = await api.post('/vaga/buscar', tecnologias);
      const todasVagas = vagasResponse.data;
      const usuarioId = await AsyncStorage.getItem('userId');
      const candidaturasResponse = await api.get(`/vaga/usuario/${usuarioId}`);
      const vagasCandidatadas = candidaturasResponse.data; 

      const vagasFiltradas = todasVagas.filter(vaga => !vagasCandidatadas.includes(vaga.idVaga));


      const formattedJobs = vagasFiltradas.map(vaga => ({
        id: vaga.idVaga,
        title: vaga.tituloVaga,
        company: vaga.nomeEmpresa,
        skills: vaga.tecnologias,
      }));

      setJobs(formattedJobs);
    } catch (error) {
      console.error('Erro ao buscar vagas sugeridas:', error);
      Alert.alert('Erro', 'Não foi possível carregar as vagas sugeridas.');
    } finally {
      setLoading(false);
    }
  };

  fetchJobs();
}, []);


  return (
    <View style={styles.mainContainer}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerTitle}>Vagas Sugeridas</Text>
        <Text style={styles.headerSubtitle}>Baseado no seu perfil e preferências</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#2A4BA0" />
        ) : (
          <View style={styles.jobsContainer}>
            {jobs.length === 0 ? (
              <Text style={{ textAlign: 'center', marginTop: 20, color: '#666' }}>
                Nenhuma vaga encontrada para as tecnologias do seu perfil.
              </Text>
            ) : (
              jobs.map(job => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  company={job.company}
                  skills={job.skills}
                  onPress={() => navigation.navigate('JobMatch', { vagaId: job.id })}

                />
              ))
            )}
          </View>
        )}
      </ScrollView>

      <NavigationMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EEF3F9',
    position: 'relative',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 100,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  jobsContainer: {
    gap: 16,
  },
});

export default SuggestedJobsScreen;
