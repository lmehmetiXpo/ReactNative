import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuScreen=(props)=> {
    console.log(props);
    return(
    <View>
        <Text style={styles.text}>Welcome to Menu Screen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20
    }
})

export default MenuScreen;