import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBar from '../../Components/TopBar';

const VehiclesScreen = ({ route}) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (route.params && route.params.newVehicle) {
      addVehicle(route.params.newVehicle);
    }
  }, [route.params]);

  const addVehicle = (vehicle) => {
    setVehicles([...vehicles, vehicle]);
  };

  return (
    <>
    <TopBar pageTitle="Vehicles"></TopBar>
    <View style={styles.container}>

{vehicles.map((vehicle, index) => (
  <View key={index} style={styles.card}>
    <Text>Name: {vehicle.name}</Text>
    <Text>Make: {vehicle.make}</Text>
    <Text>Model: {vehicle.model}</Text>
    <Text>Connector Type: {vehicle.connectorType}</Text>
    {/* Add more details here as needed */}
  </View>
))}
</View>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default VehiclesScreen;
