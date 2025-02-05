import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const MainScreen =()=>{
    return <View>
        <Text>This is MainScreen</Text>
        </View>

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textStyle: {
        fontSize:30
      }
})

export default MainScreen;