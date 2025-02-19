import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ExcerciseScreen} from "./components/ExerciseScreen.js";

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={ExcerciseScreen}></Stack.Screen>
      </Stack.Navigator>

    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
