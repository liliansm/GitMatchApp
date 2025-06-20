import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import NavigationMenu from '../components/NavigationMenu';

export default function CompanyProfileScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://i.imgur.com/V9gTjFh.png' }}
            style={styles.avatar}
          />
          <Text style={styles.companyName}>Inova Tech</Text>
          <Text style={styles.subtitle}>Inovação que transforma o agora</Text>

          <TouchableOpacity style={styles.viewJobsButton}>
            <Text style={styles.viewJobsButtonText}>Visualizar vagas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.grayDescriptionBox}>
          <Text style={styles.descriptionTitle}>Sobre a empresa</Text>
          <Text style={styles.descriptionText}>
            Inova Tech é uma startup especializada em soluções digitais inteligentes
            para micro e pequenas empresas. Atuamos com consultoria tecnológica,
            criação de sistemas personalizados e transformação digital acessível,
            ajudando empreendedores a se destacarem em um mercado competitivo por
            meio da inovação.
          </Text>
        </View>
      </ScrollView>
      
      <NavigationMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EEF3F9',
    position: 'relative',
  },
  scrollContent: {
    paddingBottom: 180, 
    paddingHorizontal: 0, 
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 40,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#FFF',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  companyName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  viewJobsButton: {
    backgroundColor: '#2A4BA0',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 40, 
    shadowColor: '#2A4BA0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  viewJobsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  grayDescriptionBox: {
    backgroundColor: '#F5F7FA',
    width: '100%',
    padding: 24,
    paddingTop: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 20, 
  },
  descriptionTitle: {
    fontSize: 20, 
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 16, 
    lineHeight: 24, 
    color: '#444',
  },
});