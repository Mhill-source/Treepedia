import React from "react";
import SearchScreen from "../../screens/SearchScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const SearchNav = () => {
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
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SearchNav;
