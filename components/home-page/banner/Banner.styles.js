import { Box, styled } from "@mui/material";
import Image from "next/image";

export const BannerContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  minHeight: "800px",
  width: "100%",
  height: "60vh",
  position: "relative",
  top: 0,

  "&:before": {
    content: `""`,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    zIndex: "1",
    backgroundColor: "black",
    opacity: ".75",
  },

  // "&:after": {
  //   content: `""`,
  //   width: "100%",
  //   height: "300px",
  //   zIndex: "0",
  //   bottom: "-300px",
  //   backgroundColor: "white",
  //   left: "0",
  //   position: "absolute",
  //   transform: "skewY(-8deg)",
  //   transformOrigin: "top left",
  // },
}));

export const BannerTextContainer = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1rem",
  color: "white",
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: "2",
  gap: "1rem",
}));

export const StyledImage = styled(Image)(({}) => ({
  objectFit: "cover",
  transition: "all 0.5s ease",
  animation: "fadeInOut 0.5s linear",
  "@keyframes fadeInOut": {
    "0%": {
      opacity: "0.8",
      transform: "scale(0.99)",
    },
    "100%": {
      opacity: "1",
      transform: "scale(1)",
    },
  },
}));