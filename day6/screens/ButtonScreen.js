import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonScreen = () => {
    let counter, counterT = 0;
    return(

        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Button
                title='Click Me'
                color="purple"
                onPress={()=> console.log('Button Clicked', counter++)}
            />
            <TouchableOpacity style={styles.touchableBtn} onPress={()=> console.log('Touchable Element Clicked', counterT++)}>
                <Text style={styles.textBtn}>Click Touchable Element</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    touchableBtn:{
        backgroundColor:'purple',
        marginVertical: 15,
        paddingVertical: 20,
        marginHorizontal: 20,
        borderRadius: 6
    },
    textBtn:{
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight:'bold'
    }


});

export default ButtonScreen;