import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNav from "./HomeNav";
import SearchNav from "./SearchNav";
import ProfileNav from "./ProfileNav";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={{ alignItems: "center" }}>
                <Ionicons name="home" size={size} color="#80B435" />
                <Text style={{ color: "#80B435" }}>Home</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center" }}>
                <Ionicons name="home" size={size} color={color} />
                <Text style={{ color: color }}>Home</Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="SearchNav"
        component={SearchNav}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={{ alignItems: "center" }}>
                <Ionicons name="search" size={size} color="#80B435" />
                <Text style={{ color: "#80B435" }}>Search</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center" }}>
                <Ionicons name="search" size={size} color={color} />
                <Text style={{ color: color }}>Search</Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="ProfileNav"
        component={ProfileNav}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <View style={{ alignItems: "center" }}>
                <Ionicons name="person" size={size} color="#80B435" />
                <Text style={{ color: "#80B435" }}>Profile</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center" }}>
                <Ionicons name="person" size={size} color={color} />
                <Text style={{ color: color }}>Profile</Text>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
