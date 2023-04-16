import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNav from "./AuthNav";
import TabNav from "./TabNav";

const Stack = createStackNavigator();

const RootNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AuthNav"
    >
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="AuthNav" component={AuthNav} />
    </Stack.Navigator>
  );
};

export default RootNav;
