import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, AccessibilityActionEvent } from 'react-native';

const AddHomeScreen = ({ route, navigation }) => {
  const [home, setHome] = useState('');

  const handleAddHome = () => {
    if (home.trim() !== '') {
      navigation.navigate('Favorites', {newHome: home})
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Home Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter home name"
        value={home}
        onChangeText={(text) => setHome(text)}
      />
      <Button title="Add Home" onPress={handleAddHome} />
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

export default AddHomeScreen;
