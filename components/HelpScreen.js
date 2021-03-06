import React from 'react';

import { View , TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Paragraph, Title } from "react-native-paper"
import styles from "./styles";

import MyButton from './myButton';



const HelpScreen = ({ navigation }) => {
  return (
    <View style={styles.container, { textAlign: "start", padding: 30}}>
      <Title style={myStyles.title}>Help</Title>
      <Paragraph>
      This is the help page for the game I made
      </Paragraph>
    </View>
  )
}

const myStyles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 10
  }
})
export default HelpScreen