import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function FeaturesSection() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <View style={[styles.container, isDesktop && styles.desktopContainer]}>
      {/* Textos e ícones */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Como Funciona?</Text>
        <Text style={styles.subheading}>
          Encontre a vaga ideal em 3 passos simples
        </Text>

        <View style={styles.stepsContainer}>
          <View style={styles.step}>
            <FontAwesome5 name="github" size={28} color="#1d4ed8" />
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Conecte seu GitHub</Text>
              <Text style={styles.stepText}>
                Crie uma conta utilizando o link do seu perfil do GitHub para
                obter uma análise técnica instantânea.
              </Text>
            </View>
          </View>

          <View style={styles.step}>
            <MaterialIcons name="work-outline" size={28} color="#1d4ed8" />
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Descubra vagas compatíveis</Text>
              <Text style={styles.stepText}>
                Receba recomendações de vagas que combinam com seu perfil e suas
                competências em projetos reais.
              </Text>
            </View>
          </View>

          <View style={styles.step}>
            <Ionicons
              name="checkmark-done-circle-outline"
              size={28}
              color="#1d4ed8"
            />
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Candidate-se com confiança</Text>
              <Text style={styles.stepText}>
                Escolha a vaga ideal, veja seu índice de compatibilidade e envie
                sua candidatura diretamente pela plataforma.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Imagem */}
      {isDesktop && (
        <Image
          source={require('../assets/img2Home.png')}
          style={styles.image}
          resizeMode="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    paddingHorizontal: 20,
  },
  desktopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 30,
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 28,
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
    gap: 20,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  stepTextContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  stepText: {
    fontSize: 14,
    color: '#475569',
  },
  image: {
    flex: 1,
    width: 300,
    height: 300,
  },
});
