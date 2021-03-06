import  { 
  DarkTheme as PaperDarkTheme, 
  DefaultTheme as PaperDefaultTheme,
   } from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from "@react-navigation/native"
import merge from 'deepmerge'

const myDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,

  roundness: 2,
  colors: {
    "accent": "#388e3c",
    "backdrop": "rgba(0, 0, 0, 0.5)",    
    "background": "rgb(242, 242, 242)",  
    "border": "rgb(216, 216, 216)",      
    "card": "rgb(255, 255, 255)",        
    "disabled": "rgba(0, 0, 0, 0.26)",   
    "error": "#B00020",
    "notification": "rgb(255, 59, 48)",  
    "onBackground": "#000000",
    "onSurface": "#000000",
    "placeholder": "rgba(0, 0, 0, 0.54)",
    "primary": "#ff4800",
    "surface": "#ffffff",
    "text": "rgb(28, 28, 30)",
  }
}
export const CombinedDefaultTheme = myDefaultTheme
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme)

