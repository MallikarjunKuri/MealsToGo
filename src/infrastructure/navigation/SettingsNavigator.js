import React from "react";
import { SettingsScreen } from "../../features/Settings/Screens/SettingScreen";
import {FavouritesScreen} from "../../features/Settings/Screens/favouritesScreen"
import {
    createStackNavigator,
    CardStyleInterpolators,
  } from "@react-navigation/stack";
  
  const SettingsStack = createStackNavigator();
  
  export const SettingsNavigator = ({ route, navigation }) => {
    return (
      <SettingsStack.Navigator
        headerMode="screen"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <SettingsStack.Screen
          options={{
            header: () => null,
          }}
          name="Settings"
          component={SettingsScreen}
        />
        <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      </SettingsStack.Navigator>
    );
  };