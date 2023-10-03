import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import bannerImage1 from "@/assets/banner1.jpg";
import bannerImage2 from "@/assets/banner2.jpg";
import bannerImage3 from "@/assets/banner3.jpg";
import bannerImage4 from "@/assets/banner4.jpg";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import {
  carousalSettings,
  featuredSettings,
} from "@/helpers/carousal-settings";
import {
  FeaturedImageContainer,
  FeaturedRestaurantsContainer,
  FeaturedTextContainer,
} from "./FeaturedRestaurants.styles";

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
    <Container
      disableGutters
      maxWidth="false"
      sx={{
        padding: "5rem 1rem",
      }}
    >
      <FeaturedRestaurantsContainer maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          <ResponsiveText variant="header">Featured Restaurants</ResponsiveText>
        </Box>
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ResponsiveText
                    variant="mainBody"
                    sx={{ fontWeight: "bold" }}
                  >
                    {restaurant.restaurantName}
                  </ResponsiveText>
                  <ResponsiveText variant="mainBody">
                    {restaurant.review}
                  </ResponsiveText>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ResponsiveText variant="helper">
                    {restaurant.tags.join(", ")}
                  </ResponsiveText>
                  <ResponsiveText variant="helper">
                    {restaurant.review} ({restaurant.totalReviews} reviews)
                  </ResponsiveText>
                </Box>
              </FeaturedTextContainer>
            </Box>
          ))}
        </Slider>
      </FeaturedRestaurantsContainer>
    </Container>
  );
};

export default FeaturedRestaurants;
