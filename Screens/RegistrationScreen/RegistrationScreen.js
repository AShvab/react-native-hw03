import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const RegistrationScreen = () => {
  
  const handleButtonPress = () => {
    console.log("Button registration pressed");
  };

  const handleLoginPress = () => {
    console.log("Login pressed");
  };

  const handlePlusButtonPress = () => {
    console.log("Plus button pressed");
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
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          style={styles.avatarButton}
          onPress={handlePlusButtonPress}
        >
          <Text style={styles.avatarButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Реєстрація</Text>
        <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
        <TextInput
          style={styles.input}
          placeholder="Логін"
          autoComplete="name"
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          autoComplete="email"
        />
        <TextInput
          style={[styles.input, styles.lastInput]}
          placeholder="Пароль"
          autoComplete="password"
        />
              </KeyboardAvoidingView>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.centerText]}>Вже є акаунт?</Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={[styles.text, styles.linkText]}>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
  },
  avatarContainer: {
    position: "absolute",
    top: "45%",
    left: "50%",
    marginTop: -60,
    marginLeft: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9,
  },
  avatarButton: {
    position: "absolute",
    right: "-10%",
    bottom: 16,
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: "#FF6C00",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarButtonText: {
    fontSize: 20,
    top: "-10%",
    color: "#FF6C00",
  },
  formContainer: {
    position: "relative",
    flex: 1,
    height: 549,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heading: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 30,
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
    color: "white",
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
    marginLeft: 5,
  },
  centerText: {
    textAlign: "center",
  },
});

export default RegistrationScreen;
