import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SigninScreen from "../screens/SigninScreen";
import CreateScreen from "../screens/CreateScreen";
import TabNav from "./TabNav";

const Stack = createStackNavigator();

const AuthNav = () => {
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
        options={{
          headerShown: true,
          title: "Create an Account",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: true, title: "Forgot Password" }}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNav;
