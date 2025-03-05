import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import StudentScreen from './screens/StudentScreen';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen 
            name="Menu" 
            component={MenuScreen} 
            options={{title: 'Main Menu'}}/>


          <Stack.Screen 
            name="Students" 
            component={StudentScreen} 
            options={{title: 'Students Profile'}}
          />
      </Stack.Navigator>
    </NavigationContainer>

    
  )
}
