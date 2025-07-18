import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function JobMatch({ title, company, skills, percentage }) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const progress = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(progress, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  const handleCandidatar = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('Profile');  // Navega para Profile ao fechar modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>

      <View style={styles.matchContainer}>
        <Text style={styles.matchLabel}>Seu Match</Text>
        <Text style={styles.matchPercent}>{percentage}%</Text>
      </View>

      <View style={styles.progressBarBackground}>
        <Animated.View
          style={[
            styles.progressBarFill,
            {
              width: widthInterpolated,
              backgroundColor: '#3b82f6', // azul fixo
            },
          ]}
        />
      </View>

      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillBadge}>
            <Text style={styles.skillText}>#{skill}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCandidatar} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Candidatar-se</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalEmoji}>✅🎉</Text>
            <Text style={styles.modalTitle}>Candidatura enviada!</Text>
            <Text style={styles.modalText}>
              🚀 Boa sorte! A empresa vai analisar seu perfil.
            </Text>
            <Pressable
              style={styles.modalButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 14,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 22,
    elevation: 4,
    shadowColor: '#00000022',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e293b',
    textAlign: 'center',
  },
  company: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 12,
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: 6,
    marginBottom: 6,
  },
  matchLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
  },
  matchPercent: {
    fontSize: 36,
    fontWeight: '900',
    color: '#3b82f6', // azul vibrante
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 14,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  skillBadge: {
    backgroundColor: '#f0f9ff',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  skillText: {
    color: '#3b82f6',
    fontWeight: '600',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 35,
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
    elevation: 15,
    shadowColor: '#00000055',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 6 },
  },
  modalEmoji: {
    fontSize: 42,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 12,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 25,
  },
  modalButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 24,
    elevation: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
