import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/Restaurants/screens/restaurants.screen";
import {RestaurantDetailScreen} from "../../features/Restaurants/screens/restaurants.Details";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator 
        
         screenOptions={{ 
            headerShown:false,
            ...TransitionPresets.ModalTransition 
        }} >
            {/* here is the first rendering in page */}
            <RestaurantStack.Screen
                name="Restaurant"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};