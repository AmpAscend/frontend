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
import UserScreen from "./Screens/User/UserScreen.js";
import NotificationsScreen from "./Screens/Notifications/NotificationsScreen.js";
import TopBar from "./Components/TopBar.js";
import AddVehicleScreen from "./Screens/AddNew/AddNewVehicle.js";
import AddHomeScreen from "./Screens/AddNew/AddNewHome.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="AuthOptions" component={AuthOptionsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Favorites"  component={FavoritesScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Vehicles" component={VehiclesScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Maps" component={MapsScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Homes" component={HomesScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export default function App() {
  const isLoggedIn = true; // change to false to get auth pages; true for home page

  // Todo : auth logic here

  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
        <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
        <Stack.Screen name = "AddVehicle" component={AddVehicleScreen} options={{headerShown:false}}/>
        <Stack.Screen name = "AddHome" component={AddHomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
      </Stack.Navigator> : <AuthStack />}
    </NavigationContainer>
  );
}