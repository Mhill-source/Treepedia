import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          "Avenir-Regular": require("../assets/fonts/AvenirRegular.otf"),
          "Avenir-Bold": require("../assets/fonts/AvenirBold.otf"),
          "Avenir-Medium": require("../assets/fonts/AvenirMedium.otf"),
          ...FontAwesome.font,
        });
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResources();
  }, []);

  return isLoadingComplete;
}
