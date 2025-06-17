import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const JobMatch = ({ title, percentage, skills }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>

    <View style={styles.circleContainer}>
      <View style={styles.circle}>
        <Text style={styles.percentText}>{percentage}%</Text>
      </View>
      <Text style={styles.matchLabel}>Compatibilidade</Text>
    </View>

    <Text style={styles.subtitle}>
      Você tem {percentage}% de compatibilidade com esta vaga
    </Text>

    <View style={styles.skillsContainer}>
      {skills.map((skill, i) => (
        <View key={i} style={styles.skillTag}>
          <Text style={styles.skillText}>{skill}</Text>
        </View>
      ))}
    </View>

    <Button
      title="Candidatar-se"
      buttonStyle={styles.applyButton}
      titleStyle={styles.applyText}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
    textAlign: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#1d4ed8',
  },
  percentText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  matchLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748b',
  },
  subtitle: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 20,
    textAlign: 'center',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  skillTag: {
    backgroundColor: '#e2e8f0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4,
  },
  skillText: {
    fontSize: 13,
    color: '#1e293b',
  },
  applyButton: {
    backgroundColor: '#1d4ed8',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: '100%',
  },
  applyText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default JobMatch;
