import * as React from "react";

import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "inter-100": require("../assets/fonts/Inter-Thin.ttf"),
          "inter-200": require("../assets/fonts/Inter-ExtraLight.ttf"),
          "inter-300": require("../assets/fonts/Inter-Light.ttf"),
          "inter-400": require("../assets/fonts/Inter-Regular.ttf"),
          "inter-500": require("../assets/fonts/Inter-Medium.ttf"),
          "inter-600": require("../assets/fonts/Inter-SemiBold.ttf"),
          "inter-700": require("../assets/fonts/Inter-Bold.ttf"),
          "inter-800": require("../assets/fonts/Inter-ExtraBold.ttf"),
          "inter-900": require("../assets/fonts/Inter-Black.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
