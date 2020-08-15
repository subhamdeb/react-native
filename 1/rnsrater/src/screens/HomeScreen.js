import React from "react";
import { Text, StyleSheet } from "react-native";
import ComponentsScreen from "./ComponentsScreen"
 
const HomeScreen = () => {
  return (
  <>
  <Text style={styles.text}>Home Screen</Text>
    <ComponentsScreen />
  <Text style={styles.second}>Getting started with react native</Text>
  <Text style={styles.third}>My name is Subham Deb</Text>
  </>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  second:{
    fontSize : 45
  },
  third:{
    fontSize:20
  }
});


export default HomeScreen;
