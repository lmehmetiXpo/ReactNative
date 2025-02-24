import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ButtonScreen = () => {
    return(

        <View>
        <Text style={styles.textStyle}>Button Screen</Text>
        <Button
            title='Click Me'
            color="purple"
            onPress={()=> console.log('Button Clicked')}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    }
});

export default ButtonScreen;