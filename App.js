import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
// You can import from local files
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';
import HelpScreen from './components/HelpScreen';
import CustomNavigationBar from './components/CustomNavigationBar';

import { CombinedDefaultTheme } from './CustomProperties/themes';
// or any pure javascript modules available in npm

import { Card } from 'react-native-paper';


const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />
          }}
          >
          <Stack.Screen name="Home" component={HomeScreen} options={{
            headerShown: false
          }}/>
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{
                headerShown: true,
            }}
          />
          <Stack.Screen
            name="Help"
            component={HelpScreen}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
