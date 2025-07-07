import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NavbarGradient from '../components/NavbarGradient';
import FooterGradient from '../components/FooterGradient';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NavbarGradient />
      <ScrollView contentContainerStyle={styles.content}>
        <HeroSection navigation={navigation} />
        <FeaturesSection />
        <TestimonialsSection />
        <FooterGradient />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F9',
  },
  content: {
    paddingBottom: 30,
    gap: 40,
  },
});
