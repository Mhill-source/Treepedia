import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/SigninScreen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CreateScreen from "../screens/CreateScreen";

const Stack = createStackNavigator();

const RootNav = () => {
  const { canGoBack, goBack } = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () =>
          canGoBack() ? (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => goBack()}
            >
              <Ionicons name="chevron-back" color="black" size={25} />
            </TouchableOpacity>
          ) : null,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: true, title: "Sign In" }}
      />
      <Stack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{ headerShown: true, title: "Create an Account" }}
      />
    </Stack.Navigator>
  );
};

export default RootNav;
