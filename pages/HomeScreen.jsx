import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FooterGradient from '../components/FooterGradient';

// Simulando autenticação
const isLoggedIn = false; 

export default function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    setMenuVisible(false);
    alert('Você saiu!');
  };

  return (
    <View style={styles.container}>
      {/* Navbar com menu hambúrguer */}
      <View style={styles.navbar}>
        <Text style={styles.logo}>GitMatch</Text>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu" size={28} color="#1d4ed8" />
        </TouchableOpacity>
      </View>

      {/* Menu Hamburguer */}
      <Modal visible={menuVisible} transparent animationType="fade">
        <TouchableOpacity style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>
            {isLoggedIn ? (
              <>
                <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                  <Text style={styles.menuText}>Sair</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.menuText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Cadastro')}>
                  <Text style={styles.menuText}>Cadastrar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </TouchableOpacity>
      </Modal>

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
  navbar: {
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  content: {
    paddingBottom: 30,
    gap: 40,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 70,
    marginRight: 20,
    padding: 12,
    gap: 12,
    elevation: 6,
    minWidth: 140,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#1e293b',
  },
});
