import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function FeaturesSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Como Funciona?</Text>
      <Text style={styles.subheading}>
        Encontre a vaga ideal em apenas 3 passos
      </Text>

      <View style={styles.stepsContainer}>
        {features.map((item, index) => (
          <View key={index} style={styles.stepCard}>
            <View style={styles.iconCircle}>{item.icon}</View>
            <View style={styles.textContent}>
              <Text style={styles.stepTitle}>{item.title}</Text>
              <Text style={styles.stepText}>{item.text}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const features = [
  {
    icon: <FontAwesome5 name="github" size={22} color="#1d4ed8" />,
    title: 'Conecte seu GitHub',
    text: 'Crie sua conta usando seu perfil do GitHub e tenha uma análise técnica instantânea.',
  },
  {
    icon: <MaterialIcons name="work-outline" size={24} color="#1d4ed8" />,
    title: 'Descubra vagas compatíveis',
    text: 'Receba sugestões de vagas alinhadas com seu perfil e experiências reais.',
  },
  {
    icon: <Ionicons name="checkmark-done-circle-outline" size={24} color="#1d4ed8" />,
    title: 'Candidate-se com confiança',
    text: 'Veja seu índice de compatibilidade e envie sua candidatura diretamente.',
  },
];

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#f8fafc',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
  },
  subheading: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 20,
  },
  stepsContainer: {
    gap: 16,
  },
  stepCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  textContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  stepText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
});
