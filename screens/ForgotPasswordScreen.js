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

const ForgotPasswordScreen = () => {
  const [userEmail, setUserEmail] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Text style={styles.ForgotPasswordText}>Forgot Your Password ?</Text>
      </View>
      <View>
        <Text style={styles.ResetAccountText}>
          Let's help you reset your account
        </Text>
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

        <TouchableOpacity style={styles.Button}>
          <Text style={styles.RequestLinkButtonText}>Request link</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  ForgotPasswordText: {
    fontSize: 40,
    fontFamily: "Avenir-Medium",
    color: "#0A3229",
    marginTop: 70,
    marginLeft: 15,
  },
  EmailText: {
    marginLeft: 15,
    marginTop: 60,
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
  RequestLinkButtonText: {
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

  ResetAccountText: {
    fontFamily: "Avenir-Regular",
    fontSize: 18,
    marginTop: 15,
    alignSelf: "center",
  },
});
