import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import homeBackground from './img/r.png';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>أجعل مناسبتك تفوح عبقا</Text>
      <Text>بتشكيلة زهور نضرة من متجرنا للورد المتميز</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    fontSize: 20,
    color: "#4a54f1",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage:`url(${homeBackground})`
  
  },
});

        
