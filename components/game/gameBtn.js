import React, { useState, useEffect, useRef } from "react";
import { Pressable, Animated } from "react-native";
import AnswerText from "./answerText";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const GameButton = ({ item, answered, isCorrect, handleAnswerClicked }) => {

    const [color, setColor] = useState("");
    const btnColors = ['rgb(0, 0, 255)', 'rgb(0, 255, 0)', 'rgb(100, 100, 100)', 'rgb(200, 100, 0)'];

    useEffect(() => {

      if (!answered) {
        setColor(btnColors[Math.floor(Math.random() * btnColors.length)]);
      } else {
        if (isCorrect) {
          setColor("green")
        } else {
          setColor("red")
        }
      }
    }, [answered, isCorrect, btnColors]);
  
    
  
    return (
      
      <AnimatedPressable
        onPress={() => handleAnswerClicked(item.id)}
        disabled={answered}
        style={{
          backgroundColor: color,
          justifyContent: 'center',
          padding: 15,
          width: '100%',
          alignItems: 'center',
          borderRadius: 10,
          margin: 2,
        }}>
        <AnswerText isCorrect={isCorrect} item={item} answered={answered} />
      </AnimatedPressable>
    );
  };

  export default GameButton;