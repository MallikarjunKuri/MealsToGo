import React, { useContext,useState } from "react";
//by using the react-native-paper package we call the search bar and we importing the searchbar
//import { Searchbar } from "react-native-paper";
import { ActivityIndicator,MD2Colors } from "react-native-paper";
import { SafeArea } from "../../../Components/Utility/SafeAreaComponent";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
//we have to importing the restaurantinfocard from the js file insaid the card component is there
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { Spacer } from "../../../Components/spacer/spacer.component";
import {FavouritesBar} from "../../../Components/Favourites/FavouriteBarComponent";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/Favourites/Favourite.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
     
      <Search 
       isFavouritesToggled={isToggled}
       onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
        {isToggled && (
        <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
      )}


{isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={MD2Colors.blue300} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
            onPress={() => navigation.navigate("RestaurantDetail",{
              restaurant:item,
            })
            }>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};