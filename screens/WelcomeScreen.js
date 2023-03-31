import treee from "../assets/treee.png";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.TreeHomeImage} source={treee} />
      <Text style={styles.TreepediaText}>Treepedia</Text>
      <TouchableOpacity
        onPress={() => {
          navigate("Signin");
        }}
        style={styles.Button}
      >
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    marginTop: 150,
    backgroundColor: "#80B435",
    height: 50,
    width: "80%",
    borderRadius: 15,
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
    color: "#0A3229",
  },
});
