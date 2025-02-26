import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation-stack';
import { createStackNavigator } from 'react-navigation'
import MenuScreen from './screens/MenuScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
    </View>
  );
}

const navigator = createStackNavigator(
  {
    Menu: MenuScreen
  },{
    initialRouteName: "Menu",
    dafaultNavigationOptions: {
      title: "App"
    }
  }
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator);