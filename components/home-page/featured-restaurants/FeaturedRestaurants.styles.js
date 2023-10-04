import { Box, Container, styled } from "@mui/material";

export const FeaturedRestaurantsContainer = styled(Container)(({}) => ({
  "& .slick-slide > div": { display: "flex", gap: "1rem" },
  "& .slick-slide ": {
    display: "flex !important",
    flexDirection: "column",
    gap: "1rem",
  },
  "& .slick-dots li button::before": {
    transition: "all 0.2s ease 0s",
    content: `""`,
    width: "12px",
    height: "12px",
    borderRadius: "100%",
    background: "darkorange",
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

export const FeaturedDetails = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
