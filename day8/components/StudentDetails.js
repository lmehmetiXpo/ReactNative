import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const StudentDetails = ({ name, description, image}) => {
    return(
        <View style={styles.studentContainer}>
            <Image source={image} style={styles.image}/>
            <View>
                <Text style = {styles.name}>{name}</Text>
                <Text style={styles.info}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    studentContainer:{
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        padding: 10,
        borderRadius: 6
    },
    image: {
        width:100,
        height:100,
        marginRight: 15,
        borderRadius: 60
    },
    info: {
        flex:1
    },
    name: {
        fontSize:22,
        fontWeight: 'bold',
        marginBottom: 7
    }
})

export default StudentDetails;