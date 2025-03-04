import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ButtonScreen from './screens/ButtonScreen';
import ListScreen from './screens/ListScreen';


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name= "Menu" component={MenuScreen} options={{title:'App'}}/>
          <Stack.Screen name= "Exercise" component={ExerciseScreen}/>
          <Stack.Screen name= "Button" component={ButtonScreen}/>
          <Stack.Screen name= "ListScreen" component={ListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
