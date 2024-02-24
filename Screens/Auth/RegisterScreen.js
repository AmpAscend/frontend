import React, { useState} from 'react'
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    console.log(name, email, password);
    if (!email || !password || !name || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password and Confirm Password must be the same");
      return;
    }
    setLoading(true);
    try {
      fetch("http://192.168.1.35:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      setLoading(false);
      if (data.error) {
        setError(data.error);
      } else {
        alert("Account Created Successfully");
        navigation.navigate("Login");
      }
    } catch (err) {
      setLoading(false);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onPressIn={() => setError("")}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onPressIn={() => setError("")}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onPressIn={() => setError("")}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Retype Password"
        onPressIn={() => setError(null)}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
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
    alignSelf: "flex-start",
    marginLeft: width * 0.1,
    marginBottom: 10,
  },
});

export default RegisterScreen;
