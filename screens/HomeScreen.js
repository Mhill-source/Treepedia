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
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Text style={styles.GreetingText}>Good Evening Michael</Text>
      </View>
      <SearchBar onChangeText={(e) => setSearch(e)} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  GreetingText: {
    fontSize: 30,
    fontFamily: "Avenir-Bold",
    color: "#0A3229",
    marginTop: 40,
    marginLeft: 15,
  },
});
