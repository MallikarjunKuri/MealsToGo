
import React from "react";
import { ThemeProvider } from "styled-components";
import { useFonts as useOswald,Oswald_400Regular} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZ-DPC3tdHMnYBtgvq7L1NcO4e7VIB5FQ",
  authDomain: "mealstogo-947d5.firebaseapp.com",
  projectId: "mealstogo-947d5",
  storageBucket: "mealstogo-947d5.appspot.com",
  messagingSenderId: "171309244476",
  appId: "1:171309244476:web:ac376bd9a8b1dd458c6339"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
              <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>

  
    </>
  );
}