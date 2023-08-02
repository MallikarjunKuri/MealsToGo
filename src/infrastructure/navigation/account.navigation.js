import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../features/Account/screens/AccountScreen";
import { LoginScreen } from "../../features/Account/screens/LoginScreen";
import { RegisterScreen } from "../../features/Account/screens/RegisterScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);