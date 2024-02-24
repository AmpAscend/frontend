import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AuthOptionsScreen from "./Screens/Auth/AuthOptionScreen.js";
import RegisterScreen from "./Screens/Auth/RegisterScreen.js";
import LoginScreen from "./Screens/Auth/LoginScreen.js";
import FavoritesScreen from "./Screens/Favorites/FavoritesScreen";
import VehiclesScreen from "./Screens/Vehicles/VehiclesScreen";
import MapsScreen from "./Screens/Maps/MapsScreen";
import HomesScreen from "./Screens/Homes/HomesScreen"; 
import UserScreen from "./Screens/User/UserScreen.js";
import NotificationsScreen from "./Screens/Notifications/NotificationsScreen.js";
import AddVehicleScreen from "./Screens/AddNew/AddNewVehicle.js";
import AddHomeScreen from "./Screens/AddNew/AddNewHome.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCar, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faMap } from "@fortawesome/free-regular-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AuthOptions"
      component={AuthOptionsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={MainTabs}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="User"
      component={UserScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddVehicle"
      component={AddVehicleScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AddHome"
      component={AddHomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faHeart} size={22} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Vehicles"
      component={VehiclesScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faCar} size={22} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Homes"
      component={HomesScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faHouseChimney} size={22} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Maps"
      component={MapsScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <FontAwesomeIcon icon={faMap} size={22} color="black" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        setIsLoggedIn(token !== null); // Update isLoggedIn based on the presence of the token
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      // Clear the token from AsyncStorage
      await AsyncStorage.removeItem("token");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
