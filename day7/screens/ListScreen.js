import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Welcome to List Screen</Text>
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

export default ListScreen;
