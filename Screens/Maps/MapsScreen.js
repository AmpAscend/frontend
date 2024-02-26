import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Modal, Button } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import TopBar from '../../Components/TopBar';

const MapsScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestStation, setNearestStation] = useState(null);
  const [isStationInfoModalOpen, setIsStationInfoModalOpen] = useState(true);
  

  const handleStationMarkerPress = (station) => {
    setIsStationInfoModalOpen(true);
  };

  useEffect(() => {
    // Get user's current location
    console.log('Fetching user location...');
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();

  }, []);

  useEffect(() => {
    if (userLocation) {

      console.log('User location fetched:', userLocation);
      fetchNearestStation();
    }

  }, [userLocation]);

  const fetchNearestStation = async () => {
    try {
      if (!userLocation) {
        console.log('use location is null...');
        return;
      }
      console.log('Fetching nearest station...');
      let response = await fetch(`http://localhost:3000/api/nearestStation?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}`);
      let data = await response.json();
      console.log('Nearest station data received:', data);
      setNearestStation(data);
    } catch (error) {
      console.error('Error fetching nearest station:', error);
    }
  };





  return (
    <>
      <TopBar />
      <View style={styles.container}>
        {userLocation && nearestStation && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            provider={PROVIDER_GOOGLE}
          >
            <Marker
              coordinate={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              title="Your Location"
              pinColor="blue"
            />
            {nearestStation.map((station, index) => (
              <Marker
                key={index} // Add a unique key prop
                coordinate={{
                  latitude: parseFloat(station.lattitude),
                  longitude: parseFloat(station.longitude),
                }}
                title={station.name}
                pinColor="green"
                onPress={() => handleStationMarkerPress(station)}
              />
            ))}
          </MapView>
        )}
        {nearestStation && isStationInfoModalOpen && <View
        isVisible={isStationInfoModalOpen}
        style = {styles.card}
      >
        {nearestStation.map ((station, index) => (<View style={styles.modalContent}>
          <Text style={styles.cardTitle} key={index}>{station.name}</Text>
          <Text style={styles.cardContent} >Address : {station.address}</Text>
          <Text style={styles.cardContent} >Availibility : {station.availability}</Text>
          {/* Display other station information as needed */}
          <Button title="Close" onPress={() => setIsStationInfoModalOpen(false)} />
        </View>))}
      </View>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card:{
    position: 'absolute',
    width: 350,
    borderRadius: 20,
    bottom: 30,
  },
  cardContent :{
    fontWeight : 'normal',

  }
});

export default MapsScreen;
