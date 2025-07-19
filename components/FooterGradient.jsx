import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function FooterGradient() {
  return (
    <LinearGradient colors={['#1d4ed8', '#0f172a']} style={styles.footer}>
      <Text style={styles.logo}>GitMatch</Text>
      <Text style={styles.text}>© 2025 GitMatch. Todos os direitos reservados.</Text>
      <Text style={styles.text}>suporte@gitmatch.com</Text>
      <Text style={styles.links}>Termos de uso • Privacidade</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 24,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  text: {
    fontSize: 13,
    color: '#e2e8f0',
    marginBottom: 2,
    textAlign: 'center',
  },
  links: {
    fontSize: 12,
    color: '#93c5fd',
    marginTop: 8,
    textAlign: 'center',
  },
});
