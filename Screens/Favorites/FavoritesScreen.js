import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../Components/TopBar';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { color } from 'react-native-elements/dist/helpers';
import { faCar, faHome } from '@fortawesome/free-solid-svg-icons';



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
            style={styles.addButtonContainer} 
            onPress={() => navigation.navigate('AddVehicle')}>
          <FontAwesomeIcon icon={faSquarePlus} size={28} style={styles.addButton}></FontAwesomeIcon>

          {/* vehicles list */}
          </TouchableOpacity>
          {vehicles.map((vehicle, index) => (
            vehicle && vehicle.name &&
            <VehicleCard
            key={index}
            vehicle={vehicle}
            // onPress={() => navigation.navigate("VehicleDetails", { vehicle })}
          />
          ))}
        </View>

        {/* Homes */}
        <View style = {styles.section}>
            <Text style = {styles.heading}>Homes</Text>
            {/* add button */}
            <TouchableOpacity 
              style = {styles.addButtonContainer} 
              onPress={()=> navigation.navigate('AddHome')}
            >
              <FontAwesomeIcon icon={faSquarePlus} size={28} style={styles.addButton}></FontAwesomeIcon>
            </TouchableOpacity>

            {/* Homes list */}
            {homes.map((home, index) => (
            home && home.name &&
            <HomeCard
            key={index}
            home={home}
            // onPress={() => navigation.navigate("VehicleDetails", { vehicle })}
          />
          ))}
        </View>
      </View>
    </>
  );
};

const VehicleCard = ({ vehicle, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    {vehicle && vehicle.name && (
      <View style={styles.cardContent}>
        <FontAwesomeIcon icon={faCar} size={20} color="#333" style={styles.icon} />
        <Text style={styles.nameText}>{`${vehicle.name}'s Car`}</Text>
      </View>
    )}

    {/* Container for placeholder props */}
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>Charge: {vehicle?.charge || "Placeholder"}</Text>
      <Text style={styles.placeholderText}>Last Charged: {vehicle?.lastCharged || "Placeholder"}</Text>
      <Text style={styles.placeholderText}>Last Used: {vehicle?.lastUsed || "Placeholder"}</Text>
    </View>
  </TouchableOpacity>
);

const HomeCard = ({ home, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    {home && home.name && (
      <View style={styles.cardContent}>
        <FontAwesomeIcon icon={faHome} size={20} color="#333" style={styles.icon} />
        <Text style={styles.nameText}>{`${home.name}'s Home`}</Text>
      </View>
    )}

    {/* Container for placeholder props */}
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>Usage: {home?.realTimeUsage || "Placeholder"}</Text>
      <Text style={styles.placeholderText}>Solar Production: {home?.solarProduction || "Placeholder"}</Text>
      <Text style={styles.placeholderText}>Est. Savings: {home?.savings || "Placeholder"}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  headingSection:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    marginBottom: 30,

   },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardHeading:{
    fontSize: 16,

  },
  addButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  addButton: {
    color : "black",
  },
  addButtonText: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#EDEDED",
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
  card: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "column",
    alignItems: "start",

  },
  icon: {
    marginRight: 10,
  },
  nameText: {
    fontSize: 26,
    fontWeight: "500",
    color: "#4D4D4D",
  },
  cardContent: {
    flexDirection: "row", // Wrap name and icon horizontally
    alignItems: "center", // Align name and icon vertically
  },
  placeholderContainer: {
    marginTop: 10, // Add margin for spacin
    flexDirection: "column", // Stack placeholder props vertically
  },
  placeholderText: {
    marginVertical: 5,
  }
});

export default FavoritesScreen;
