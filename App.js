import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AuthOptionsScreen from "./Screens/Auth/AuthOptionsScreen"; 
import HomeScreen from "./Screens/HomeScreen";
import FavoritesScreen from "./Screens/Favorites/FavoritesScreen";
import VehiclesScreen from "./Screens/Vehicles/VehiclesScreen";
import MapsScreen from "./Screens/Maps/MapsScreen";
import HomesScreen from "./Screens/Homes/HomesScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 


const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="AuthOptions" component={AuthOptionsScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Vehicles" component={VehiclesScreen} />
        <Tab.Screen name="Maps" component={MapsScreen} />
        <Tab.Screen name="Homes" component={HomesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
