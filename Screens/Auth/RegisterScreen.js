import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    // Todo : Regestration logic
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Todo : call backend api to register user
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Retype Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: height * 0.045,
    fontWeight: "700",
    marginBottom: height * 0.02,
    marginLeft: width * 0.1,
    alignSelf: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    bottom: "15%",
    position: "absolute",
    width: "30%",
    height: "10%",
    resizeMode: "contain",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "gray",
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  button: {
    backgroundColor: "#d3d3d3",
    width: "80%",
    height: 50,
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#3F3F3F",
    fontWeight: "500",
    fontSize: 18,
  },
  errorText: {
    color: "red",
    marginBottom: 20,
  },
});

export default RegisterScreen;
