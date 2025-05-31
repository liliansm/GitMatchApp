import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NavbarGradient from '../components/NavbarGradient';
import FooterGradient from '../components/FooterGradient';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NavbarGradient />

      <ScrollView contentContainerStyle={styles.content}>
        <HeroSection />
        <FeaturesSection />
        <FooterGradient />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EEF3F9' },
  content: { paddingHorizontal: 20, paddingBottom: 30 },
});