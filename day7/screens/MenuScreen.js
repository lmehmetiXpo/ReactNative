import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';

const MenuScreen=(props)=> {
    console.log(props.navigation);
    return(
    <View>
        <Text style={styles.text}>Welcome to Menu Screen</Text>
        <Button 
        title='Go To List'
        onPress={() => navigation.navigate('ListScreen')}
        />
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