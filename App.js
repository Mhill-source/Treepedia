import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import TreeHome from "./assets/TreeHome.png";
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.TreeHomeImage} source={TreeHome} />
      <Text style={styles.TreepediaText}>Treepedia</Text>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.SigninText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.CreateaccountText}>Create an Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    marginTop: 150,
    backgroundColor: "#80B435",
    height: 60,
    width: 200,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  SigninText: {
    fontSize: 22,
    fontFamily: "Avenir-Medium",
    color: "white",
  },
  CreateaccountText: {
    marginTop: 20,
    fontSize: 20,
  },
  TreeHomeImage: {
    height: 400,
    width: 400,
    resizeMode: "contain",
  },
  TreepediaText: {
    fontFamily: "Avenir-Bold",
    fontSize: 40,
    color: "#80B435",
  },
});
