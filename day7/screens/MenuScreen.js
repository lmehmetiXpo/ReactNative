import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MenuScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      <Button 
        title="Go To List" 
        onPress={() => navigation.navigate('ListScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 20
  }
});

export default MenuScreen;
