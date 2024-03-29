import React, { useState } from "react";
import { ScrollView } from "react-native";
// here i have to import the list from the react native paper
import { List } from "react-native-paper";
import { SafeArea } from "../../../Components/Utility/SafeAreaComponent";

import { RestaurantInfoCard } from "../components/restaurant-info-card-component";

export const RestaurantDetailScreen = ({ route }) => {
    // here we have to creat the usestate 
    const [breakfastExpanded, setbreakfastExpanded] = useState(false);
    const [lunchExpanded, setlunchExpanded] = useState(false);
    const [dinnerExpanded, setdinnerExpanded] = useState(false);
    const [drinksExpanded, setdrinksExpanded] = useState(false);
    const { restaurant } = route.params;
    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props) => <List.Icon{...props} icon="bread-slice" />}
                    expanded={breakfastExpanded}
                    onPress={() => { setbreakfastExpanded(!breakfastExpanded) }}
                >
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Classic Breakfast" />
                </List.Accordion>
                {/* for lunch list menu */}
                <List.Accordion
                    title="Lunch"
                    left={(props) => <List.Icon{...props} icon="hamburger" />}
                    expanded={lunchExpanded}
                    onPress={() => { setlunchExpanded(!lunchExpanded) }}
                >
                    <List.Item title="Burger w/ Fries" />
                    <List.Item title="Steak Sandwich" />
                    <List.Item title="Mushroom Soup" />

                </List.Accordion>
                {/* for dinner list menu */}
                <List.Accordion
                    title="Dinner"
                    left={(props) => <List.Icon{...props} icon="food-variant" />}
                    expanded={dinnerExpanded}
                    onPress={() => { setdinnerExpanded(!dinnerExpanded) }}
                >
                    <List.Item title="Spaghetti Bolognese" />
                    <List.Item title="Veal Cutlet with chicken Mushrum" />
                    <List.Item title="Steak Frites" />

                </List.Accordion>
                {/* for drinks list menu */}
                <List.Accordion
                    title="Drinks"
                    left={(props) => <List.Icon{...props} icon="cup" />}
                    expanded={drinksExpanded}
                    onPress={() => { setdrinksExpanded(!drinksExpanded) }}
                >
                    <List.Item title="Coffee" />
                    <List.Item title="Tea" />
                    <List.Item title="Modelo" />
                    <List.Item title="Fanta" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    );
} 