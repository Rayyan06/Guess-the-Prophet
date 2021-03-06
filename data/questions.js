
import 'react-native-get-random-values';
import { v4 } from 'uuid';
/*
complete
to3 hello what is wrong with you 

*/
const questionDir = "./assets/questions/"
const questions = [
    {
      text: questionDir + 'adam.jpg',
      answers: [
        { text: '4 light years', id: v4() },
        { text: '93 million miles', id: v4() },
        { text: '1.3 billion miles', id: v4() },
        { text: '256,000 miles', id: v4() },
      ],
      correctAnswer: 2,
    },
    {
      text: questionDir + 'nuh.jpg',
      answers: [
        { text: 'Nuh', id: v4() },
        { text: 'Adam', id: v4() },
        { text: 'Isa', id: v4() },
        { text: 'Musa', id: v4() },
      ],
      correctAnswer: 1,
    },
    {
      text: questionDir + 'sulaiman.jpg',
      answers: [
        { text: 'Sulaiman', id: v4() },
        { text: 'Ibrahim', id: v4() },
        { text: 'Yusuf', id: v4() },
        { text: 'Emulator', id: v4() },
      ],
      correctAnswer: 1,
    },
    {
      text: questionDir + 'muhammad.jpg',
      answers: [
        {text: 'Muhammad(SAW)', id: v4() },
        {text:'1', id: v4() },
        {text:'11', id: v4() },
        {text:'.', id: v4() },
       ],
      correctAnswer: 1
    },
  ];

export default questions;