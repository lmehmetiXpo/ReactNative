import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation-stack';
import { createStackNavigator } from 'react-navigation'
import MenuScreen from './screens/MenuScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import { Button } from 'react-native-web';
import ButtonScreen from './screens/ButtonScreen';
import ListScreen from './screens/ListScreen';
import MainScreen from './screens/MainScreen'


const navigator = createStackNavigator(
  {
    Main: MenuScreen,
    Exercise: ExerciseScreen,
    Button: ButtonScreen,
    List: ListScreen,
    // Menu: MenuScreen
  },
  
  {
    initialRouteName: "Menu",
    dafaultNavigationOptions: {
      title: "App"
    }
  }
  
);
export default createAppContainer(navigator);