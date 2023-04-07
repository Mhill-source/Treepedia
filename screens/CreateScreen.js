import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const CreateScreen = () => {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <ScrollView style={{ paddingBottom: 32 }}>
        <View>
          <Text style={styles.CreateAccountText}>Create an Account</Text>
        </View>
        <KeyboardAvoidingView>
          <View style={{ padding: 16 }}>
            <Text style={styles.FullNameText}>Full Name</Text>
            <TextInput
              onChangeText={(e) => setUserFullName(e)}
              placeholder="Enter Your Full Name Here"
              style={styles.FullNameInput}
            />
          </View>
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
          <TouchableOpacity
            onPress={() => {
              navigate("Signin");
            }}
            style={styles.Button}
          >
            <Text style={styles.SigninbuttonText}>Create Account</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  CreateAccountText: {
    fontSize: 50,
    fontFamily: "Avenir-Medium",
    color: "#0A3229",
    marginTop: 50,
    marginLeft: 15,
  },
  FullNameText: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "Avenir-Regular",
    fontSize: 18,
  },
  FullNameInput: {
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    borderColor: "#80B435",
    padding: 10,
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
    marginTop: 50,
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
});
