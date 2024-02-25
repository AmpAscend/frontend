import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowAltCircleRight,
  faCircleUser,
  faSave,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { Icon } from "react-native-elements";
import {
  faArrowPointer,
  faArrowRight,
  faClockRotateLeft,
  faGear,
  faSignOut,
  faUnlockKeyhole,
  faUserAlt,
  faUserAltSlash,
  faUserAstronaut,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserScreen = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      //navigation.navigate("AuthStack");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/profilephoto.jpg")}
            style={styles.userIcon}
          ></Image>
        </View>
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.info}>janedoe@gmail.com</Text>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => console.log("Pressed")}
        >
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            size={22}
            style={styles.cardElements}
          />
          <Text style={styles.cardElements}>Trip History</Text>
          <FontAwesomeIcon
            icon={faArrowRight}
            size={20}
            style={styles.cardElements}
          />
        </TouchableOpacity>
        <View style={styles.lineStyle} />

        <TouchableOpacity
          style={styles.card}
          onPress={() => console.log("Pressed")}
        >
          <FontAwesomeIcon
            icon={faUserEdit}
            size={22}
            style={styles.cardElements}
          />
          <Text style={styles.cardElements}>Account Info</Text>
          <FontAwesomeIcon
            icon={faArrowRight}
            size={20}
            style={styles.cardElements}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => console.log("Pressed")}
        >
          <FontAwesomeIcon
            icon={faGear}
            size={22}
            style={styles.cardElements}
          />
          <Text style={styles.cardElements}>Settings</Text>
          <FontAwesomeIcon
            icon={faArrowRight}
            size={20}
            style={styles.cardElements}
          />
        </TouchableOpacity>

        <View style={styles.lineStyle} />

        <TouchableOpacity
          style={styles.card}
          onPress={() => console.log("Pressed")}
        >
          <FontAwesomeIcon
            icon={faUnlockKeyhole}
            size={22}
            style={styles.cardElements}
          />
          <Text style={styles.cardElements}>Privacy Policy</Text>
          <FontAwesomeIcon
            icon={faArrowRight}
            size={20}
            style={styles.cardElements}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => handleLogout()}>
          <FontAwesomeIcon
            icon={faSignOut}
            size={22}
            style={styles.cardElements}
          />
          <Text style={styles.cardElements}>Log Out</Text>
          <FontAwesomeIcon
            icon={faArrowRight}
            size={20}
            style={styles.cardElements}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    paddingTop: 60,
    paddingBottom: 50,
    borderRadius: 20,
    elevation: 50,
    backgroundColor: "#1a1a1a",
  },

  iconContainer: {
    alignItems: "center",
    marginTop: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  userIcon: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#6c757d",
    width: 120,
    height: 120,
  },

  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },

  info: {
    fontSize: 18,
    color: "#dee2e6",
    textAlign: "center",
    marginTop: 5,
  },

  cardContainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#adb5bd",
    marginHorizontal: 12,
    marginTop: 20,
  },

  card: {
    width: "100%",
    height: 50,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  cardElements: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "500",
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#ced4da",
    marginHorizontal: 30,
  },
});

export default UserScreen;
