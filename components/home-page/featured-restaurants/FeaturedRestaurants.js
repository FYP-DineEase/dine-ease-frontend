import React from "react";

import Image from "next/image";

import { Box, Container } from "@mui/material";

import bannerImage1 from "@/assets/banner1.jpg";
import bannerImage2 from "@/assets/banner2.jpg";
import bannerImage3 from "@/assets/banner3.jpg";
import bannerImage4 from "@/assets/banner4.jpg";

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

const FeaturedRestaurants = () => {
  const featuredRestaurants = [
    {
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage1,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 3.7,
    },
    {
      restaurantName: "Kababjees",
      restaurantImage: bannerImage2,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 2,
    },
    {
      restaurantName: "Fish Point",
      restaurantImage: bannerImage3,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 4.7,
    },
    {
      restaurantName: "Steak House",
      restaurantImage: bannerImage4,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 3.4,
    },
    {
      restaurantName: "Cake Shop",
      restaurantImage: bannerImage1,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 4.2,
    },
    {
      restaurantName: "Pizza Max",
      restaurantImage: bannerImage1,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 3.7,
    },
    {
      restaurantName: "Kababjees Bakers",
      restaurantImage: bannerImage2,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 2,
    },
    {
      restaurantName: "Yadgar Point",
      restaurantImage: bannerImage3,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 4.7,
    },
    {
      restaurantName: "Burger House",
      restaurantImage: bannerImage4,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 3.4,
    },
    {
      restaurantName: "Paan Shop",
      restaurantImage: bannerImage1,
      tags: ["Cheese", "Italian"],
      totalReviews: 100,
      review: 4.2,
    },
  ];

  return (
    <Container maxWidth="false">
      <FeaturedRestaurantsContainer maxWidth="xl">
        <SectionHeading>
          <ResponsiveText variant="header">Featured Restaurants</ResponsiveText>
        </SectionHeading>
        <Slider {...featuredSettings}>
          {featuredRestaurants.map((restaurant) => (
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
