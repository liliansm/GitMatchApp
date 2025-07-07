import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileSection({ user }) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />

          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.username}</Text>
          <Text style={styles.title}>{user.title}</Text>

          <TouchableOpacity style={styles.analysisButton}>
            <Text style={styles.analysisButtonText}>Ver Análise</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.grayContainer}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <View style={styles.techContainer}>
            {user.techs.map((tech, index) => (
              <View key={index} style={styles.techChip}>
                <Text style={styles.techChipText}>#{tech}</Text>
              </View>
            ))}
          </View>

          <View style={styles.bioSection}>
            <Text style={styles.bioTitle}>Sobre</Text>
            <Text style={styles.description}>{user.description}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F9',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  profileHeader: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 3,
    marginBottom: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#1d4ed8',
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e293b',
  },
  username: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  title: {
    fontSize: 15,
    color: '#1d4ed8',
    fontWeight: '600',
    marginBottom: 12,
  },
  analysisButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 10,
    paddingHorizontal: 36,
    borderRadius: 24,
    elevation: 2,
    marginTop: 10,
    marginBottom: 20,
  },
  analysisButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  grayContainer: {
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    borderRadius: 20,
    marginHorizontal: 16,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 16,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  techChip: {
    borderColor: '#1d4ed8',
    borderWidth: 1.2,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: '#e0ecff',
  },
  techChipText: {
    color: '#1d4ed8',
    fontWeight: '600',
    fontSize: 13,
  },
  bioSection: {
    marginTop: 8,
  },
  bioTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 22,
  },
});
