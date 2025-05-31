import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function FooterGradient() {
  return (
    <LinearGradient colors={['#0f172a', '#1d4ed8']} style={styles.footer}>
      <Text style={styles.text}>© 2025 Big GitMatch</Text>
      <Text style={styles.text}>Contato: suporte@gitmatch.com</Text>
      <Text style={styles.text}>Termos de uso | Privacidade</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    marginVertical: 2,
  },
});