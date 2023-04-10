import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import { Image } from "react-native";
import TextSlider from "../components/TextSlider";

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Text style={styles.GreetingText}>Good Evening Racheal</Text>
      </View>
      <SearchBar onChangeText={(e) => setSearch(e)} />
      <View>
        <Text style={styles.FunfactText}>Some fun facts about trees</Text>
      </View>
      <TextSlider />
      <View>
        <Text style={styles.FeaturedText}>Featured Plants</Text>
      </View>
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
  FunfactText: {
    fontSize: 20,
    fontFamily: "Avenir-Bold",
    color: "#0A3229",
    marginTop: 20,
    marginLeft: 15,
  },
  FeaturedText: {
    fontSize: 20,
    fontFamily: "Avenir-Bold",
    color: "#0A3229",
    marginTop: 20,
    marginLeft: 15,
  },
});
