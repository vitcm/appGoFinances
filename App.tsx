import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";
import theme from "./src/global/styles/theme";

import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { SignIn } from "./src/screens/SignIn";
import { AuthContext } from "./src/AuthContext";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <AuthContext.Provider value={[]}>
          <SignIn />
        </AuthContext.Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
