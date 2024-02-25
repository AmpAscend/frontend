import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'

const AddHomeScreen = ({ navigation }) => {
  const [home, setHome] = useState({
    name : "",
    provider : "",
    numberOfPanels: 0,
    realTimeUsage: "",
    solarProduction: "",
    savings: "",
  });

  const handleAddHome = () => {

    if (home.name.trim() !== '') {
      navigation.navigate('Favorites', { newHome: home });
      navigation.navigate('Homes', { newHome: home });
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Home name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter home name"
        value={home.name}
        onChangeText={(text) => setHome({...home, name: text})}
      />
      
      <Text style={styles.label}>Select provider:</Text>
      <Picker
        style={styles.picker}
        selectedValue={home.provider}
        onValueChange={(itemValue, itemIndex) => setHome({...home, provider : itemValue})}
      >
        <Picker.Item label="1" value="Tata Power Solar" />
        <Picker.Item label="2" value="Adani Solar" />
        <Picker.Item label="3" value="Servotech Power Systems" />
      </Picker>

      <Text style={styles.label}>Number of panels:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter home name"
        value={home.numberOfPanels.toString()}
        onChangeText={(text) => setHome({...home, numberOfPanels : parseInt(text)})}
        keyboardType='numeric'
      />
      <Button title="Add Home" onPress={handleAddHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
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
  picker: {
    height: 100, // Set a fixed height for the Picker
    borderColor: 'gray',
    marginBottom: 10,
  },
});

export default AddHomeScreen;
