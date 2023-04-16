import React from "react";
import HomeScreen from "../../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const HomeNav = () => {
  const { canGoBack, goBack } = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNav;
