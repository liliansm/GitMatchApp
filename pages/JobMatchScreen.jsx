import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import JobMatch from '../components/JobMatch';
import { jobMatch } from '../data/jobs';
import NavigationMenu from '../components/NavigationMenu';

const JobMatchScreen = () => (
  <View style={styles.mainContainer}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Image 
        source={require('../assets/Logo2.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.whiteView}>
        <JobMatch {...jobMatch} />
      </View>
    </ScrollView>
    
    <NavigationMenu />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EEF3F9',
    position: 'relative',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, 
  },
logo: {
    width: '90%',                   
    height: 180,                    
    marginTop: 30,             
    marginBottom: 20,    
    alignSelf: 'center', 
  },
  whiteView: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    marginTop: 20,
    minHeight: '50%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  content: {
    flex: 1,
    paddingBottom: 20,
  },
});

export default JobMatchScreen;