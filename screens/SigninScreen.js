import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Text style={styles.SigninText}>Sign in</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ padding: 16 }}>
          <Text style={styles.EmailText}>Email</Text>
          <TextInput
            onChangeText={(e) => setUserEmail(e)}
            placeholder="Enter Your Email Here"
            style={styles.EmailInput}
          />
        </View>
        <View style={{ padding: 16 }}>
          <Text style={styles.PasswordText}>Password</Text>
          <TextInput
            onChangeText={(e) => setUserPassword(e)}
            placeholder="Enter Your Password Here"
            style={styles.PasswordInput}
            secureTextEntry
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigate("ForgotPasswordScreen");
            }}
          >
            <Text style={styles.ForgotPasswordText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate("TabNav");
          }}
          style={styles.Button}
        >
          <Text style={styles.SigninbuttonText}>Sign In</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  SigninText: {
    fontSize: 50,
    fontFamily: "Avenir-Medium",
    color: "#0A3229",
    marginTop: 70,
    marginLeft: 15,
  },
  EmailText: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "Avenir-Regular",
    fontSize: 18,
  },
  EmailInput: {
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    borderColor: "#80B435",
    padding: 10,
  },
  PasswordText: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "Avenir-Regular",
    fontSize: 18,
  },
  PasswordInput: {
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    borderColor: "#80B435",
    padding: 10,
  },
  SigninbuttonText: {
    fontSize: 22,
    fontFamily: "Avenir-Medium",
    color: "white",
  },
  Button: {
    backgroundColor: "#80B435",
    height: 50,
    width: "80%",
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  ForgotPasswordText: {
    fontFamily: "Avenir-Regular",
    fontSize: 18,
    marginTop: 15,
    alignSelf: "center",
  },
});
