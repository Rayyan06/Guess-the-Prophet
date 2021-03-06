import React from "react";
import { Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styles from "../styles";


const AnswerText = ({ item, isCorrect, answered }) => {
    if (answered) {
        return (
          <Text style={styles.text}>
            {item.text} <FontAwesome name={isCorrect ? "check" : "times"} size={30} color="white" />
          </Text>
        );
    } else {
      return <Text style={styles.text}>{item.text}</Text>;
    }
  };

  export default AnswerText;