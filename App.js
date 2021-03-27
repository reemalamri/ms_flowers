import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Platform,ImageBackground, StyleSheet, Text, View, Button } from "react-native";
const image = { uri: "https://www.123mobilewallpapers.com/wp-content/uploads/2014/07/pink_rose_flower.jpg" };
//import homeBackground from './img/pink.jpg';


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
    <Button
        title="انقر للاستمرار"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text style={styles.text1}>أجعل مناسبتك تفوح عبقا</Text>
      <Text style={styles.text}>بتشكيلة زهور نضرة من 
        <Text style={styles.inertext}> متجرنا </Text>
        <Text style={styles.text}>للورد المتميز </Text>
      </Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    fontSize: 50,
    color: "#4a54f1",
    //alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    width: 380,
    height: 850 ,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    alignSelf: 'center',
    position: 'absolute',
    bottom:60,
    color: "black",
    fontSize: 20,
    //fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000a0"
  },inertext: {
    alignSelf: 'center',
    position: 'absolute',
    bottom:60,
    color: "black",
    fontSize: 30,
    //fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000a0"
  },
  text1: {
    alignSelf: 'center',
    position: 'absolute',
    bottom:110,
    color: "black",
    fontSize: 28,
    //fontWeight: "bold",
    textAlign: "right",
    //backgroundColor: "#000000a0"
  }
});

 
export default App;
