import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Sign Up</Text>

        <TextInput
          placeholder="Enter your email"
          style={styles.input}
        />

        <TextInput
          placeholder="Enter password"
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm password"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#8CD400",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});