import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const StudentInfoScreen = () => {
  // Using let for full name
  let fullName = "John Doe";

  // Using const for personal details
  const birthDate = "January 1, 2000";
  const email = "john.doe@example.com";

  // Array of hobbies
  const hobbies = ["Reading", "Coding", "Gaming", "Music", "Traveling"];

  return (
    <View style={styles.container}>
      {/* Personal Information */}
      <Text style={styles.header}>Student Information</Text>
      <Text style={styles.info}>Full Name: {fullName}</Text>
      <Text style={styles.info}>Birth Date: {birthDate}</Text>
      <Text style={styles.info}>Email: {email}</Text>

      {/* Hobbies List */}
      <Text style={styles.subHeader}>Hobbies</Text>
      <FlatList
        data={hobbies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.hobby}>{item}</Text>}
      />
    </View>
  );
};

// Styling (Students can modify this)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#2b2d42",
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#8d99ae",
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  hobby: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "#edf2f4",
    marginVertical: 5,
    borderRadius: 5,
    textAlign: "center",
  },
});

export default StudentInfoScreen;
