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
import { Routes } from "./src/routes";
import { AppRoutes } from "./src/routes/app.routes";
import { SignIn } from "./src/screens/SignIn";
import { AuthProvider, useAuth } from "./src/hooks/auth";
import { Dashboard } from "./src/screens/Dashboard";
import { Resumo } from "./src/screens/Resumo";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return null;
  }

  SplashScreen.hideAsync();

  // return (
  //   <ThemeProvider theme={theme}>
  //     <NavigationContainer>
  //       <StatusBar barStyle={"light-content"} />
  //       <AuthProvider>
  //         <Resumo />
  //       </AuthProvider>
  //     </NavigationContainer>
  //   </ThemeProvider>
  // );

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"light-content"} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
