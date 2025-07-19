import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfileSection from '../components/ProfileSection';
import NavigationMenu from '../components/NavigationMenu';

export default function ProfileScreen({ navigation }) {
  const userData = {
    name: 'Eduarda Silva',
    username: '@eduarda123',
    title: 'Desenvolvedora Entusiasta',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    techs: ['Python', 'JavaScript', 'Django'],
    description:
      'Profissional de tecnologia com foco em Python e na área de dados. Comprometida com inovação e desenvolvimento contínuo, em busca de novas oportunidades e desafios.',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="menu" size={28} color="#1d4ed8" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <ProfileSection user={userData} />
      </ScrollView>
      <NavigationMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F9',
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#EEF3F9',
  },
  content: {
    paddingBottom: 100, 
  },
});
