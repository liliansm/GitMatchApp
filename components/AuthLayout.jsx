import React from 'react';
import { View, StyleSheet, Image, Text, useWindowDimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AuthLayout({ title, subtitle, button, children }) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <View style={styles.container}>
      {isDesktop && (
        <LinearGradient colors={['#0f172a', '#1d4ed8']} style={styles.leftSide}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </LinearGradient>
      )}

      <ScrollView contentContainerStyle={[
        styles.rightSide,
        !isDesktop && styles.fullWidth,
        !isDesktop && { paddingTop: 5 }  
      ]}>
       {!isDesktop && (
        <Image
          source={require('../assets/Logo2.png')}
          style={styles.logo2}
          resizeMode="contain"
        />
       )}
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {children}
        {button && <View style={styles.buttonWrapper}>{button}</View>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  rightSide: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#EEF3F9',
  },
  fullWidth: {
    width: '100%',
  },
  logo: {
    width: 500,
    height: 500,
  },
  logo2: {
    width: 300,
    height: 200,
    alignSelf: 'center', 
    marginBottom: 10,  
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#0f172a',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#475569',
  },
  buttonWrapper: {
    marginTop: 20,
  },
});
