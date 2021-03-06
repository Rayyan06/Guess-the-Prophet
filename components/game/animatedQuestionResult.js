import React, {useState, useEffect, useRef} from 'react';
import { Animated, Text, View, StyleSheet } from "react-native";
import styles from "../styles"

const AnimatedQuestionResult = ({ correct }) => {
    const dropInAnim = useRef(new Animated.Value(-90)).current;
    const [ bgColor, setBgColor ] = useState("")

    useEffect(() => {
      if (correct) setBgColor("green")
      else setBgColor("red")
    }, [correct])

    useEffect(() => {

        Animated.sequence([
            Animated.spring(
                dropInAnim, 
                {
                    useNativeDriver: false, // Add This line
                    toValue: 0,
                },

            ),
            Animated.delay(1000),
            Animated.spring(
                dropInAnim,
                {
                    useNativeDriver: false,
                    toValue: -80,
                }
            )
        
            ]).start()
    }, [dropInAnim])

    return (
    <Animated.View style={[
      styles.container, 
      {
        top: dropInAnim, 
        backgroundColor: bgColor

         
      }, 
      thisStyles.box]}>
        <Text style={styles.text}>{ correct ? `Correct! + 100` : `Incorrect :( - 30` }</Text>
    </Animated.View>
    )
}


const thisStyles = StyleSheet.create({
    box: {
        padding: 20,
        flex: 1,
        width: "100%",
        position: 'absolute',
        zIndex: 3,
    } 
})

export default AnimatedQuestionResult
