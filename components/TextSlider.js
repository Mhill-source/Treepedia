import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native";

const TextSlider = () => {
  const TextData = [
    {
      id: 1,
      text: "Earth Has More Than 60,000 Known Tree Species",
    },
    {
      id: 2,
      text: "More Than Half of All Tree Species Exist Only in a Single Country",
    },
    {
      id: 3,
      text: "The First Known Tree Was a Leafless, Fernlike Plant From New York",
    },
    {
      id: 4,
      text: "Some Trees Emit Chemicals That Attract Enemies of Their Enemies",
    },
    {
      id: 5,
      text: "Trees can help you find your way if you get lost in the woods",
    },
  ];

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={TextData}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToStart
        bounces={false}
        contentContainerStyle={{ padding: 16 }}
        snapToEnd={false}
        snapToOffsets={[0, 1]}
        renderItem={({ item }) => (
          <View key={item.id} style={[styles.container]}>
            <Text style={styles.SliderText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TextSlider;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#80B435",
    padding: 8,
    maxWidth: "80%",
    height: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  SliderText: {
    color: "white",
    fontFamily: "Avenir-Medium",
    fontSize: 18,
  },
});
