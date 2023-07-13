import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = () => {
  const handleButtonPress = () => {
    console.log("Button login pressed");
  };

  const handleRegisterPress = () => {
    console.log("Register pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/backgroundImg.jpg")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Увійти</Text>
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
        />
        <TextInput
          style={[styles.input, styles.lastInput]}
          placeholder="Пароль"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Немає акаунту?</Text>
          <TouchableOpacity onPress={handleRegisterPress}>
            <Text style={[styles.text, styles.linkText]}>Зареєструватись</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
backgroundColor:"#ffffff",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
  },
  formContainer: {
    position: "relative",
    flex: 1,
    height: 489,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heading: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
  },
  lastInput: {
    marginBottom: 0,
  },
  button: {
    backgroundColor: "#FF6C00",
    width: 343,
    height: 50,
    marginTop: 43,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  text: {
    color: "#1B4371",
    fontSize: 16,
  },
  linkText: {
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});

export default LoginScreen;
