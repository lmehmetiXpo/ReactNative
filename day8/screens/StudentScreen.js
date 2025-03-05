import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import StudentDetails from '../components/StudentDetails';

const StudentScreen = () => {

    const students = [
        {
            id: 1,
            name:'Rrita',
            description: 'Loves coding and exploring',
            image: require('../assets/img2.jpg'),
        },
        {
            id: 2,
            name:'Milot',
            description: 'Loves coding and exploring',
            image: require('../assets/img1.jpg'),
        },
        {
            id: 3,
            name:'Nota',
            description: 'Loves coding and exploring',
            image: require('../assets/img3.jpg'),
        }
    ];
    return(
        <ScrollView contentContainerStyle={styles.container}>

            {students.map(student =>(
                <StudentDetails
                    key={student.id}
                    name={student.name}
                    description={student.description}
                    image={student.image}
                />
            ))}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f0f0f0', 
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', 
    }
});

export default StudentScreen; 
