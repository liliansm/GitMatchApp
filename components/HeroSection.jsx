import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // ou 'react-native-vector-icons/MaterialIcons'
import { useFonts, Poly_400Regular } from '@expo-google-fonts/poly';

export default function HeroSection({ navigation }) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const [fontsLoaded] = useFonts({
    Poly_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={[styles.container, isDesktop && styles.desktopContainer]}>
      <View style={[styles.textContainer, isDesktop && styles.textContainerDesktop]}>
        <Text style={[styles.title, isDesktop && styles.titleDesktop]}>
          Conectamos você à vaga ideal através do seu GitHub
        </Text>

        <Text style={[styles.subtitle, isDesktop && styles.subtitleDesktop]}>
          No GitMatch, analisamos suas habilidades, projetos e linguagens favoritas para encontrar as melhores oportunidades para o seu perfil.
        </Text>

        <View style={styles.featuresList}>
          <View style={styles.featureItem}>
            <MaterialIcons name="insights" size={20} color="#1d4ed8" />
            <Text style={styles.featureText}>Análises inteligentes</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="update" size={20} color="#1d4ed8" />
            <Text style={styles.featureText}>Vagas atualizadas</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="person-search" size={20} color="#1d4ed8" />
            <Text style={styles.featureText}>Match com recrutadores</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => navigation && navigation.navigate('Perfil')}
        >
          <Text style={styles.verifyButtonText}>Visualizar Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/img1Home.png')}
          style={styles.home1}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 20,
  },
  desktopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
  },
  textContainer: {
    alignItems: 'center',
    maxWidth: 600,
  },
  textContainerDesktop: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poly_400Regular',
    color: '#0f172a',
    textAlign: 'center',
  },
  titleDesktop: {
    textAlign: 'left',
    fontSize: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginTop: 10,
    textAlign: 'center',
  },
  subtitleDesktop: {
    textAlign: 'left',
  },
  featuresList: {
    marginTop: 20,
    gap: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    fontSize: 16,
    color: '#0f172a',
  },
  verifyButton: {
    marginTop: 20,
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  verifyButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageContainer: {
    alignItems: 'center',
  },
  home1: {
    width: 440,
    height: 440,
  },
});
