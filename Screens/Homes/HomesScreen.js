import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBar from '../../Components/TopBar';

const HomesScreen = ({ route }) => {
  const [homes, sethomes] = useState([]);

  useEffect(() => {
    if (route.params && route.params.newHome) {
      addhome(route.params.newHome);
    }
  }, [route.params]);

  const addhome = (home) => {
    sethomes([...homes, home]);
  };

  return (
    <>
    <TopBar pageTitle="Homes"></TopBar>
    <View style={styles.container}>

{homes.map((home, index) => (
  <View key={index} style={styles.card}>
    <Text>Name: {home.name}</Text>
    <Text>Provider: {home.provider}</Text>
    <Text>Number Of Panels: {home.numberOfPanels}</Text>

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

export default HomesScreen;
