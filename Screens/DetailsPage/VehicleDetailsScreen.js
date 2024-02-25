import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBar from '../../Components/TopBar';
import VehicleDetailsCard from '../../Components/VehicleDetailsCard';

const VehicleDetailsScreen = ({ route }) => {
  const [vehicleData] = useState({
    name: 'Shivam Vehicle',
    model: 'Model X',
    charge: '67%',
    lastCharge: '23 hours ago',
    chargeTime: '2 hours',

    // Add more placeholder data fields as needed
  });

  return (
    <>
      <TopBar pageTitle={vehicleData?.name || 'Vehicle Details'} />
      <View style={styles.container}>
        <Text style = {styles.heading}>{vehicleData.name}</Text>
        <VehicleDetailsCard
          name={vehicleData.name}
          model={vehicleData.model}
          charge={vehicleData.charge}
          lastCharge={vehicleData.lastCharge}
          chargeTime={vehicleData.chargeTime}
        />
        <VehicleDetailsScreen model={vehicleData.model}
          charge={vehicleData.charge}
          lastCharge={vehicleData.lastCharge}
          chargeTime={vehicleData.chargeTime}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading:{
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default VehicleDetailsScreen;
