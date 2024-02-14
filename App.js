import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { styles, dynamicStyles } from "./AppStyles";
const { width } = Dimensions.get("window");

export default function App() {
  const dynamicStyle = dynamicStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.brandName}>AmpAscend</Text>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("./assets/logo.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { width: width * 0.8 }]}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { width: width * 0.8 }]}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={dynamicStyle.footerContainer}>
        <Text style={styles.footerText1}>For your</Text>
        <Text style={[styles.footerText2, styles.footerTextBold]}>
          everything electric
        </Text>
      </View>
    </View>
  );
}
