import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
} from "react-native";
const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.navigate("MainStack");
      }

    };
    checkLoginStatus();
  }, [navigation]);

  const handleLogin = async () => {
    console.log(email, password);
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await fetch("http://192.168.1.35:3000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (data.error) {
        setError(data.error);
      } else {
        await AsyncStorage.setItem("token", data.toString());
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
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
        value={password}
        onPressIn={() => setError("")}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
    resizeMode: "cover",
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
    alignSelf: "flex-start",
    marginLeft: width * 0.1,
  },
});

export default LoginScreen;
