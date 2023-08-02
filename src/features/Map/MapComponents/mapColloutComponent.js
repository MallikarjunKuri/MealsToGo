import React from "react";

import { CompactRestaurantInfo } from "../../../Components/restaurants/CompactrestaurantInfocomponent";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);