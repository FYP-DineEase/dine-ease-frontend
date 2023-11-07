import React from "react";

import Image from "next/image";

import { Box, Container } from "@mui/material";

import Slider from "react-slick";

import { featuredSettings } from "@/helpers/carousal-settings";

import {
  FeaturedDetails,
  FeaturedImageContainer,
  FeaturedRestaurantsContainer,
  FeaturedTextContainer,
} from "./FeaturedRestaurants.styles";

import { SectionHeading } from "../HomePage.styles";
import { mockFeaturedRestaurants } from "../../../mockData/mockData";
import { Text } from "@/components/UI";

const FeaturedRestaurants = () => {
  return (
    <Container maxWidth="false" sx={{ zIndex: 1000, backgroundColor: "white" }}>
      <FeaturedRestaurantsContainer maxWidth="xl">
        <SectionHeading>
          <Text variant="header">Featured Restaurants</Text>
        </SectionHeading>
        <Slider {...featuredSettings}>
          {mockFeaturedRestaurants.map((restaurant) => (
            <Box sx={{ cursor: "pointer" }} key={restaurant.restaurantName}>
              <FeaturedImageContainer>
                <Image
                  fill
                  sizes="100vw"
                  src={restaurant.restaurantImage}
                  alt={restaurant.restaurantName}
                  style={{ objectFit: "cover" }}
                />
              </FeaturedImageContainer>
              <FeaturedTextContainer>
                <FeaturedDetails>
                  <Text variant="mainBody" sx={{ fontWeight: "bold" }}>
                    {restaurant.restaurantName}
                  </Text>
                  <Text variant="mainBody">{restaurant.review}</Text>
                </FeaturedDetails>
                <FeaturedDetails>
                  <Text variant="helper">{restaurant.tags.join(", ")}</Text>
                  <Text variant="helper">
                    {restaurant.review} ({restaurant.totalReviews} reviews)
                  </Text>
                </FeaturedDetails>
              </FeaturedTextContainer>
            </Box>
          ))}
        </Slider>
      </FeaturedRestaurantsContainer>
    </Container>
  );
};

export default FeaturedRestaurants;
