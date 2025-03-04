import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExerciseScreen=()=> {
    <View>
        <Text style={styles.text}>Welcome to Exercise Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20
    }
})

export default ExerciseScreen;