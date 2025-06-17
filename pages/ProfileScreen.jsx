import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProfileSection from '../components/ProfileSection';
import NavigationMenu from '../components/NavigationMenu';

export default function ProfileScreen() {
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

      <ScrollView contentContainerStyle={styles.container}>
        <ProfileSection user={userData} />
        <NavigationMenu/>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EEF3F9' },
  content: { paddingHorizontal: 20, paddingBottom: 30 },
});