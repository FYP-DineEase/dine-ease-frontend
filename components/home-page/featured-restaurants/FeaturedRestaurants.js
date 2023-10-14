import React from "react";

import Image from "next/image";

import { Box, Container } from "@mui/material";

import Slider from "react-slick";

import { featuredSettings } from "@/helpers/carousal-settings";

import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";

import {
  FeaturedDetails,
  FeaturedImageContainer,
  FeaturedRestaurantsContainer,
  FeaturedTextContainer,
} from "./FeaturedRestaurants.styles";

import { SectionHeading } from "../HomePage.styles";
import { mockFeaturedRestaurants } from "../../../mockData/mockData";

const FeaturedRestaurants = () => {
  return (
    <Container maxWidth="false">
      <FeaturedRestaurantsContainer maxWidth="xl">
        <SectionHeading>
          <ResponsiveText variant="header">Featured Restaurants</ResponsiveText>
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
                  <ResponsiveText
                    variant="mainBody"
                    sx={{ fontWeight: "bold" }}
                  >
                    {restaurant.restaurantName}
                  </ResponsiveText>
                  <ResponsiveText variant="mainBody">
                    {restaurant.review}
                  </ResponsiveText>
                </FeaturedDetails>
                <FeaturedDetails>
                  <ResponsiveText variant="helper">
                    {restaurant.tags.join(", ")}
                  </ResponsiveText>
                  <ResponsiveText variant="helper">
                    {restaurant.review} ({restaurant.totalReviews} reviews)
                  </ResponsiveText>
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
