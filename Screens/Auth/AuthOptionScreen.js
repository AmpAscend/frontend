import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import { dynamicStyles, styles } from '../../AppStyles';
const { width } = Dimensions.get("window");

const AuthOptionScreen = () => {
  const dynamicStyle = dynamicStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.brandName}>AmpAscend</Text>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../assets/logo.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={[styles.button, { width: width * 0.8 }]}>
          <Text style={styles.buttonText} >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Register')} style={[styles.button, { width: width * 0.8 }]}>
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

export default AuthOptionScreen;
