import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const scaleText = (fontSize) => {
  return Math.round(fontSize * PixelRatio.getFontScale());
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: height * 0.12,
    paddingBottom: height * 0.1,
  },
  welcomeText: {
    alignSelf: "flex-start",
    left: width * 0.1,
    fontSize: height * 0.024,
    color: "#303030",
  },
  brandName: {
    alignSelf: "flex-start",
    left: width * 0.1,
    fontSize: height * 0.04,
    fontWeight: "bold",
    color: "#000",
    paddingBottom: height * 0.08,
  },
  logoContainer: {
    height: height * 0.25,
    width: width * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  buttonContainer: {
    paddingTop: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#d3d3d3",
    padding: height * 0.02,
    borderRadius: height * 0.03,
    marginBottom: height * 0.01,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#3F3F3F",
    fontWeight: "500",
    fontSize: height * 0.02,
  },
  footerText1: {
    position: "absolute",
    bottom: height * 0.08,
    right: width * 0.1,
    fontSize: height * 0.024,
    fontWeight: "500",
    color: "#ABABAB",
  },
  footerText2: {
    position: "absolute",
    bottom: height * 0.05,
    right: width * 0.1,
    fontSize: height * 0.024,
    fontWeight: "200",
    color: "#ABABAB",
  },
    footerTextBold: {
        fontWeight: "bold",
    },
});
export const dynamicStyles = () => {
  return StyleSheet.create({
    footerContainer: {
      position: "absolute",
      bottom: height * 0.03,
      right: width * 0.01,
      alignItems: "flex-end",
    },
  });
};
