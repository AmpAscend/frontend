import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TopBar from "../../Components/TopBar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
const VehicleCard = ({ vehicle, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <FontAwesomeIcon icon={faCar} size={20} color="#333" style={styles.icon} />
    <Text style={styles.nameText}>{`${vehicle.name}'s Car`}</Text>
  </TouchableOpacity>
);

const VehiclesScreen = ({ route }) => {
  const [vehicles, setVehicles] = useState([]);
  const navigation = useNavigation();

  const addVehicle = (newVehicle) => {
    setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
  };

  useEffect(() => {
    setVehicles([]);
    if (route.params && route.params.newVehicle) {
      addVehicle(route.params.newVehicle);
    }
  }, [route.params]);

  return (
    <>
      <TopBar pageTitle="Vehicles" />
      <View
        style={[
          styles.container,
          { justifyContent: vehicles.length === 0 ? "center" : "flex-start" },
        ]}
      >
        {vehicles.length === 0 ? (
          <Text style={styles.text}>No vehicles added</Text>
        ) : (
          vehicles.map((vehicle, index) => (
            <VehicleCard
              key={index}
              vehicle={vehicle}
              // onPress={() => navigation.navigate("VehicleDetails", { vehicle })}
            />
          ))
        )}
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddVehicle")}
      >
        <FontAwesomeIcon icon={faPlus} size={28} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 20,
    justifyContent: "center",
    borderRadius: 10,
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
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  nameText: {
    fontSize: 26,
    fontWeight: "500",
    color: "#4D4D4D",
  },
});

export default VehiclesScreen;
