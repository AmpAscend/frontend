import React from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, StyleSheet } from 'react-native';

const VehicleDetailsCard = ({ name, model, charge, lastCharge, chargeTime }) => {
  return (
      <View style = {styles.container}>
    <BlurView blurRadius={10} style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardHeading}>Model</Text>
        <Text style={styles.cardValue}>{model}</Text>
      </View>
    </BlurView>

    <BlurView blurRadius={10} style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardHeading}>Battery:</Text>
        <Text style={styles.cardValue}>{charge}</Text>
      </View>
    </BlurView>

    <BlurView blurRadius={10} style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardHeading}>Last Charge:</Text>
        <Text style={styles.cardValue}>{lastCharge}</Text>
      </View>
    </BlurView>

    <BlurView blurRadius={10} style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.cardHeading}>Charging time:</Text>
        <Text style={styles.cardValue}>{chargeTime}</Text>
      </View>
    </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        overflow: 'hidden',
    },
  cardContainer: {
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 10,
    margin: 5, // Adjust margins for spacing
    width: 'auto', // Set card width as needed
  },
  cardContent: {
    margin: 10,
  },

  cardHeading: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  cardLabel: {
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 20,
  },
});

export default VehicleDetailsCard;
