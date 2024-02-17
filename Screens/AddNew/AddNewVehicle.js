import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddVehicleScreen = ({ navigation }) => {
  const [vehicle, setVehicle] = useState('');

  const handleAddVehicle = () => {
    if (vehicle.trim() !== '') {
      navigation.navigate('Favorites', { newVehicle: vehicle });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Vehicle Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter vehicle name"
        value={vehicle}
        onChangeText={(text) => setVehicle(text)}
      />
      <Button title="Add Vehicle" onPress={handleAddVehicle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddVehicleScreen;
