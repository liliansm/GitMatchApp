import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NavbarMobile() {
  return (
    <View style={styles.nav}>
      <Text style={styles.logo}>GitMatch</Text>
      <TouchableOpacity>
        <Ionicons name="menu" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#1d4ed8',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
