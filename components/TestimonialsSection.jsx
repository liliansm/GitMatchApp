import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ou use outro pacote se preferir

const testimonials = [
  {
    id: 1,
    name: 'Amanda Silva',
    role: 'Desenvolvedora Júnior',
    feedback:
      'Consegui minha primeira vaga usando o GitMatch! O match com as empresas foi certeiro.',
  },
  {
    id: 2,
    name: 'Carlos Henrique',
    role: 'Frontend Pleno',
    feedback:
      'Gostei muito do sistema de análise do GitHub. Achei bem justo e transparente.',
  },
  {
    id: 3,
    name: 'Fernanda Costa',
    role: 'Estudante de ADS',
    feedback:
      'Ótima plataforma para quem está começando! Interface simples e eficiente.',
  },
];

export default function TestimonialsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Depoimentos de quem usou o GitMatch</Text>
      {testimonials.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.avatar}>
            <Ionicons name="person-circle-outline" size={48} color="#1d4ed8" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
            <Text style={styles.feedback}>{`“${item.feedback}”`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    color: '#1e293b',
  },
  role: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 4,
  },
  feedback: {
    fontStyle: 'italic',
    fontSize: 14,
    color: '#475569',
  },
});
