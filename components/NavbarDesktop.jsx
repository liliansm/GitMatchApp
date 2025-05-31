import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function NavbarDesktop() {
  return (
    <View style={styles.nav}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.menu}>
        <Text style={styles.item}>Home</Text>
        <Text style={styles.item}>Vagas</Text>
        <Text style={styles.item}>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#1d4ed8',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    resizeMode: 'contain',
  },
  menu: {
    flexDirection: 'row',
    gap: 20,
  },
  item: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
