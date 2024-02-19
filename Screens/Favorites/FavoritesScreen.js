import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../Components/TopBar';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const FavoritesScreen = ({ route }) => {
  const navigation = useNavigation();

  const [vehicles, setVehicles] = useState([]);
  const [homes, setHomes] = useState([]);

  const addVehicle = (newVehicle) => {
    setVehicles([...vehicles, newVehicle]);
  };

  const addHome = (newHome) => {
    setHomes([...homes, newHome]);
  };

  useEffect(() => {
    if (route.params && route.params.newVehicle) {
      addVehicle(route.params.newVehicle);
    }
  }, [route.params]);

  useEffect(() => {
    if (route.params && route.params.newHome) {
      addHome(route.params.newHome);
    }
  }, [route.params]);
  

  return (
    <>
      <TopBar pageTitle="Favorites" />

      <View style={styles.container}>
        {/* Vehicles */}
        <View style={styles.section}>
          <Text style={styles.heading}>Vehicles</Text>
          {/* add button */}
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={() => navigation.navigate('AddVehicle')}>
          <FontAwesomeIcon icon={faSquarePlus} size={28}></FontAwesomeIcon>

          {/* vehicles list */}
          </TouchableOpacity>
          {vehicles.map((vehicle, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate('VehicleDetails', { vehicle })}
            >
              <Text>{vehicle.name}</Text>
              <Text>{vehicle.make}</Text>
              <Text>{vehicle.model}</Text>

            </TouchableOpacity>
          ))}
        </View>

        {/* Homes */}
        <View style = {styles.section}>
            <Text style = {styles.heading}>Homes</Text>
            {/* add button */}
            <TouchableOpacity 
              style = {styles.addButton} 
              onPress={()=> navigation.navigate('AddHome')}
            >
              <FontAwesomeIcon icon={faSquarePlus} size={28}></FontAwesomeIcon>
            </TouchableOpacity>

            {/* Homes list */}
          {homes.map((home,index)=>(
            <TouchableOpacity key={index} 
              style={styles.card} 
              onPress={() => navigation.navigate('HomeDetails', {home})}
              >
              <Text style = {styles.cardHeading}>{home.name}</Text>
              <Text style = {styles.cardContent}>{home.provider}</Text> 
              {/* add home api content here instead */}
              <Text style = {styles.cardContent}>{home.numberOfPanels}</Text>

            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headingSection:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardHeading:{
    fontSize: 16,

  },
  addButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  addButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default FavoritesScreen;
