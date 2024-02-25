import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TopBar from '../../Components/TopBar';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";

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


const HomesScreen = ({ route}) => {
  const [homes, sethomes] = useState([]);
  const navigation = useNavigation();

  const addhome = (newhome) => {
    //adding placeholder values 
    newhome.realTimeUsage = Math.floor(Math.random() * 100) + "%"; 
    newhome.solarProduction = getRandomDate(new Date()).toLocaleDateString(); 
    newhome.savings = getRandomDate(new Date()).toLocaleDateString();
    sethomes((prevhomes) => [...prevhomes, newhome]);
  };

  const getRandomDate = (startDate, endDate = new Date()) => {
    const diff = endDate.getTime() - startDate.getTime();
    const randomTime = Math.floor(Math.random() * diff);
    const randomDate = new Date(startDate.getTime() + randomTime);
    return randomDate;
  };

  useEffect(() => {
    sethomes([]);
    if (route.params && route.params.newhome) {
      addhome(route.params.newhome);
    }
  }, [route.params]);

  return (
    <>
      <TopBar pageTitle="homes" />
      <View
        style={[
          styles.container,
          { justifyContent: homes.length === 0 ? "center" : "flex-start" },
        ]}
      >
        {homes.length === 0 ? (
          <Text style={styles.text}>No homes added</Text>
        ) : (
          homes.map((home, index) => (
            <homeCard
              key={index}
              home={home}
              // onPress={() => navigation.navigate("homeDetails", { home })}
            />
          ))
        )}
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("Addhome")}
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

export default HomesScreen;

