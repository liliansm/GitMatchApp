import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function NavbarGradient() {
  return (
    <LinearGradient colors={['#0f172a', '#1d4ed8']} style={styles.nav}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  logo: {
    width: 220,
    height: 180,
  },
});