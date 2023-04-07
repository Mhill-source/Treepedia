import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder="What tree are you searching for?"
        style={styles.searchInput}
      />
      <Ionicons name="search" color="gray" size={20} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 2,
    borderColor: "#80B435",
    borderRadius: 10,
    height: 60,
    marginHorizontal: 14,
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInput: {
    height: 40,
    padding: 10,
    alignItems: "center",
  },
});
