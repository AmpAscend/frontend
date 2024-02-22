import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import TopBar from '../../Components/TopBar';

const MapsScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestStation, setNearestStation] = useState(null);

  useEffect(() => {
    // Get user's current location
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

    // Get nearest charging station
    // fetchNearestStation();
  }, []);

  const fetchNearestStation = async () => {
    try {
      let response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
        }),
      });
      let data = await response.json();
      setNearestStation(data);
    } catch (error) {
      console.error('Error fetching nearest station:', error);
    }
  };

  return (
    <>
    <TopBar></TopBar>
    <View style={styles.container}>
      {userLocation && (
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Your Location"
            pinColor="blue"
            />
          {nearestStation && (
            <Marker
            coordinate={{
              latitude: nearestStation.latitude,
              longitude: nearestStation.longitude,
            }}
            title="Nearest Charging Station"
            pinColor="green"
            />
            )}
        </MapView>
      )}
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
});

export default MapsScreen;
