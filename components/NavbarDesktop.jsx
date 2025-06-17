import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Navbar = ({ navigation, active }) => {
  const menuItems = [
    { label: 'Home', route: 'Home' },
    { label: 'Notificações', route: 'Notificações' },
    { label: 'Vagas', route: 'SuggestedJobs' },
    { label: 'Perfil', route: 'Perfil' },
  ];

  return (
    <LinearGradient colors={['#0f172a', '#1d4ed8']} style={styles.navbar}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.route)}
            style={styles.menuItem}
          >
            <Text style={[styles.menuText, active === item.route && styles.activeText]}>
              {item.label}
            </Text>
            {active === item.route && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 140,
    height: 60,
  },
  menuContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  menuItem: {
    marginLeft: 40,
    alignItems: 'center',
  },
  menuText: {
    color: '#ffffffcc',
    fontSize: 16,
    fontWeight: '500',
  },
  activeText: {
    color: '#fff',
  },
  underline: {
    marginTop: 4,
    height: 2,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 1,
  },
});

export default Navbar;
