import { Box, Container, keyframes, styled } from "@mui/material";
import Image from "next/image";

export const FeaturedRestaurantsContainer = styled(Container)(({}) => ({
  "& .slick-slide > div": { display: "flex", gap: "1rem" },
  "& .slick-slide ": {
    display: "flex !important",
    flexDirection: "column",
    gap: "1rem",
  },
}));

export const FeaturedTextContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  padding: "1.25rem 0.35rem",
}));

export const FeaturedImageContainer = styled(Box)(({}) => ({
  height: "250px",
  position: "relative",

  "&:before": {
    content: `""`,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    zIndex: "1",
    backgroundColor: "black",
    opacity: ".25",
  },
}));
