import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Slider from './src/components/Slider/Slider';
import HomePage from './src/components/HomePage/HomePage'

export default function App() {
  return (
    <View style={styles.container}>
       <NavigationContainer>
        <StatusBar />
        <HomePage />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
});
