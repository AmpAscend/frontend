import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';


const TopBar = ({ pageTitle }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>{pageTitle}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
            <FontAwesomeIcon icon={faBell} style={styles.icon} size={24}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('User')}>
            <FontAwesomeIcon icon={faUser} style={styles.icon} size={24}/>
        </TouchableOpacity>
      </View>
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
  pageTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 43,
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
