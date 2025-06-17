import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import NavigationMenu from '../components/NavigationMenu';
import JobCard from '../components/JobCard';
import { suggestedJobs } from '../data/jobs';

const SuggestedJobsScreen = ({ navigation }) => (
  <View style={styles.mainContainer}>
    <ScrollView 
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.headerTitle}>Vagas Sugeridas</Text>
      <Text style={styles.headerSubtitle}>Baseado no seu perfil e preferências</Text>
      
      <View style={styles.jobsContainer}>
        {suggestedJobs.map((job, index) => (
          <JobCard
            key={index}
            {...job}
            onPress={() => navigation.navigate('JobMatch')}
            style={styles.jobCard}
          />
        ))}
      </View>
    </ScrollView>
    
    <NavigationMenu />
  </View>
);

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
  jobCard: {
    marginBottom: 16, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default SuggestedJobsScreen;