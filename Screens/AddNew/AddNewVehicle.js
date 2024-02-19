import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddVehicleScreen = ({ navigation }) => {
  const [vehicle, setVehicle] = useState({
    name: "",
    make: "",
    model: "",
    connectorType: "",
    RegNo: "",
  });

  const handleAddVehicle = () => {
    console.log({ vehicle })


    if (vehicle.name.trim() !== '') {
      navigation.navigate('Favorites', { newVehicle: vehicle });
      navigation.navigate('Vehicles', { newVehicle: vehicle });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name : </Text>
      <TextInput placeholder='Enter car name' value={vehicle.name} inputMode='text' onChangeText={(text) => setVehicle({ ...vehicle, name: text })} />

      <Text style={styles.label}>Make : </Text>
      <TextInput placeholder='Enter car make' value={vehicle.make} inputMode='text' onChangeText={(text) => setVehicle({ ...vehicle, make: text })} />

      <Text style={styles.label}>Model : </Text>
      <TextInput placeholder='Enter car model' value={vehicle.model} inputMode='text' onChangeText={(text) => setVehicle({ ...vehicle, model: text })} />

      <Text style={styles.label}>Connector Type : </Text>
      <Picker
        style={styles.picker}
        selectedValue={vehicle.connectorType}
        onValueChange={(itemValue, itemIndex) => setVehicle({ ...vehicle, connectorType: itemValue })}>
        <Picker.Item label="1" value="LEV AC" />
        <Picker.Item label="2" value="Bharat AC001" />
        <Picker.Item label="3" value="Type 2 AC" />
        <Picker.Item label="4" value="Bharat DC 001" />
        <Picker.Item label="5" value="CCS" />
      </Picker>

      <Button onPress={handleAddVehicle} title="Add Vehicle" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
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
