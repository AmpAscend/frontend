import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import * as Location from 'expo-location';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';




const TopBar = ({ pageTitle }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [currentLocation, setCurrentLocation] = useState(null);
    const [locationName, setLocationName] = useState(null);

    useEffect(()=>{
      //get location
      const getLocation = async () => {
        //req to get location
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted'){
          console.log('Permission to access location was denied')
          return;
        }
        // get coordinates
        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
        // Reverse geocode current location
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      
      if (reverseGeocode && reverseGeocode.length > 0) {
        const { city } = reverseGeocode[0];
        setLocationName(city);
        // sendLocationDataToBackend(location.coords.latitude, location.coords.longitude, city);

      } else {
        setLocationName("Unknown Location");
      }
      };

      if(route.name === 'Maps'){
        getLocation();
      }
    

    }, [route.name])

    
    // send location data to backend
    const sendLocationDataToBackend = (latitude, longitude, city) => {
      fetch('http://your-backend-api-endpoint.com/submit-location', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              latitude,
              longitude,
              city,
          }),
      })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Failed to send location data to backend');
              }
              console.log('Location data sent successfully');
          })
          .catch(error => {
              console.error('Error sending location data to backend:', error);
          });
  };

    return (
      <View style={styles.container}>
        {route.name == 'Maps' ? (
          currentLocation && (
            <View style= {styles.locationContainer}>
            <Text style={styles.location}>{locationName || 'Loading...'}</Text>
            <FontAwesomeIcon icon={ faAngleDown } size = {20} style={styles.locationIcon}></FontAwesomeIcon>
            </View>
            
          )
        ): (
          <>
          <Text style={styles.pageTitle}>{pageTitle}</Text>
          <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
              <FontAwesomeIcon icon={faBell} style={styles.icon} size={24}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('User')}>
              <FontAwesomeIcon icon={faUser} style={styles.icon} size={24}/>
          </TouchableOpacity>
        </View>
          </>
        )}
        
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingLeft: 24,
      paddingRight: 24,
      paddingBottom: 20,
      backgroundColor: '#1a1a1a',
      borderRadius: 18,
      height: 140,
      elevation: 3, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84, 
    },
    locationContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    pageTitle: {
      color: "white",
      fontWeight: "bold",
      fontSize: 43,
    },
    location: {
      color: "white",
      fontWeight: "bold",
      fontSize: 38,
    },

    locationIcon:{
      color : "white",
      marginBottom: 11,
      marginLeft: 10
    },

    iconsContainer: {
      paddingBottom:12,
      flexDirection: 'row',
      
    },
    icon: {
      marginLeft: 28,
      color: "white",
    },
});

export default TopBar;

