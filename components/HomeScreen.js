import React from 'react';

import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";

import { Button, Title } from "react-native-paper"
import MyButton from './myButton';


const HomeScreen = ({ name, navigation }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>{name}</Title>
      <View style={styles.btnContainer}>
         {/*<MyButton text="Play" color="green" width={100} height={50} onPress={() => navigation.navigate('Game')} />
       <MyButton text="Help" color="red" width={100} height={50} onPress={() => navigation.navigate('Help')} />*/}
      <Button labelStyle={styles.buttonLabel} mode="contained" contentStyle={styles.buttonInner} style={styles.button} onPress={() => navigation.navigate('Game')}>
        
Play      
</Button>       

      <Button labelStyle={styles.buttonLabel} mode="outlined" style={styles.button} contentStyle={styles.buttonInner} onPress={() => navigation.navigate('Help')}>
        Help
       </Button>
        
      </View>
    </View>
  )
}

HomeScreen.defaultProps = {
  name: "Guess the Prophet"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#ededed',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 90,
    
  },
  btnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    margin: 20,
    paddingHorizontal: 10,
  },
  button: {
  margin: 5,
 
  },
 buttonInner: {
    height: 50,
    width: 100,

  },
  buttonLabel: {
    fontSize: 20
  },


  title: {
    fontSize: 30,

  }
});
export default HomeScreen;