import React from "react";
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
import SettingsScreen from "./Screens/Settings/SettingsScreen.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="AuthOptions" component={AuthOptionsScreen} options={{headerShown: false}} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Vehicles" component={VehiclesScreen} />
    <Tab.Screen name="Maps" component={MapsScreen} />
    <Tab.Screen name="Homes" component={HomesScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default function App() {
  const isLoggedIn = false; // change to flase to get auth pages 

  // Todo : auth logic here

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}