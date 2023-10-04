import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import { useEffect, useState } from "react";
import Banner from "@/components/home-page/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import FeaturedRestaurants from "@/components/home-page/featured-restaurants/FeaturedRestaurants";
import RestaurantsNearby from "@/components/home-page/restaurants-nearby/RestaurantsNearby";
import RecentReviews from "@/components/home-page/recent-reviews/RecentReviews";
import Footer from "@/components/footer/Footer";

import Cities from "@/components/home-page/cities/Cities";

export default function Home() {
  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "6rem",
      }}
      disableGutters
    >
      <Banner />
      <FeaturedRestaurants />
      <Cities />
      <RestaurantsNearby />
      <RecentReviews />
      <Footer />
    </Container>
  );
}
