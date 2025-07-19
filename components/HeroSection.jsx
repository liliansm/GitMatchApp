import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Poly_400Regular } from '@expo-google-fonts/poly';
import { useNavigation } from '@react-navigation/native';

export default function HeroSection({ navigation, isLoggedIn }) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const [fontsLoaded] = useFonts({ Poly_400Regular });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.wrapper}>
      <View style={styles.hero}>
        <Text style={styles.title}>
          Conecte-se com a vaga ideal através do seu GitHub
        </Text>

        <Text style={styles.subtitle}>
          O GitMatch analisa suas habilidades e projetos para te recomendar oportunidades com base no seu perfil técnico.
        </Text>

        <View style={styles.featuresList}>
          <Feature icon="insights" label="Análises técnicas automáticas" />
          <Feature icon="update" label="Vagas sempre atualizadas" />
          <Feature icon="person-search" label="Conexão com recrutadores reais" />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation?.navigate(isLoggedIn ? 'Profile' : 'Login')}
        >
          <Text style={styles.buttonText}>
            {isLoggedIn ? 'Ver Perfil' : 'Entre agora'}
          </Text>
        </TouchableOpacity>
      </View>

      {!isDesktop && (
        <Image
          source={require('../assets/img1Home.png')}
          style={styles.image}
          resizeMode="contain"
        />
      )}
    </View>
  );
}

function Feature({ icon, label }) {
  return (
    <View style={styles.featureItem}>
      <MaterialIcons name={icon} size={22} color="#1d4ed8" />
      <Text style={styles.featureLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#ffffff',
  },
  hero: {
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 15,
    color: '#475569',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 22,
  },
  featuresList: {
    width: '100%',
    marginTop: 20,
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#f1f5f9',
    padding: 12,
    borderRadius: 8,
  },
  featureLabel: {
    fontSize: 15,
    color: '#1e293b',
    flex: 1,
    flexWrap: 'wrap',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 220,
    marginTop: 24,
    alignSelf: 'center',
  },
});
