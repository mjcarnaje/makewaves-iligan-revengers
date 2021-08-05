import * as React from "react";

import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { example, firstArticle, notFound, winterAvatar } from "../assets";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Asset.loadAsync([example, firstArticle, winterAvatar, notFound]);

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "inter-thin": require("../assets/fonts/Inter-Thin.ttf"),
          "inter-extraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
          "inter-light": require("../assets/fonts/Inter-Light.ttf"),
          "inter-regular": require("../assets/fonts/Inter-Regular.ttf"),
          "inter-medium": require("../assets/fonts/Inter-Medium.ttf"),
          "inter-semibold": require("../assets/fonts/Inter-SemiBold.ttf"),
          "inter-bold": require("../assets/fonts/Inter-Bold.ttf"),
          "inter-extraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
          "inter-black": require("../assets/fonts/Inter-Black.ttf"),
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
