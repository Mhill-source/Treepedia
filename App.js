import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./navigation/RootNav";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
