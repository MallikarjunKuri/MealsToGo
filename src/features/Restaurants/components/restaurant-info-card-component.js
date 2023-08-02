//we have to import the react from react
import React from "react";
import { View } from "react-native";
//adding svg icon into our appication we need to install
//dependency called react native svg
import { SvgXml } from "react-native-svg";
//i have to creating the new file for inline style that is spacer component 
import { Spacer } from "../../../Components/spacer/spacer.component";
//for custum text style we created and we import in to this file insaid card componenet
import { Text } from "../../../Components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Favourite } from "../../../Components/Favourites/Favourite.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "../components/restaurant-info-card-styles";
//i have created the main fuction called resturantinfocard which is having object 
//called restaurant that restaurant object haveing a multiple proparties(props)
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  //we need to iterate the four times so 
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  //console.log(placeId);
  return (
    //here we have the card import from the react native paper and we didi styled to this card
    //elevation show the card to view the card
    <RestaurantCard elevation={5}>
      {/* this card.cover helps us to add the all the properties init here 1st thing i added restaurant
      photo insaid the card.cover  */}
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>

      {/* in saperate view we added name property insad the card */}
      <Info>
        <Text variant="label">{name}</Text>
        {/* in this section view we added rating,is closrd temporly,isopennow, to our resturant  */}
        <Section>
          <Rating>
            {/* here we using array map fuction to iterate rating */}
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          {/* insaid this component we are going to add is prop called isClosedTemprorly with condition */}
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {/* here i am using the isOpanNow svg icon in a same section
            and also i used here a logic also */}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            {/* if it is Closed temprorly the image icon will be showing */}
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        {/* here i calling adress props in a seperate view */}
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};