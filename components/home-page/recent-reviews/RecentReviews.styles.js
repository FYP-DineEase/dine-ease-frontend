import { Box, Card, styled } from "@mui/material";

export const ReviewImageContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "relative",

  "&:after": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    boxShadow: "inset 0 -75px 100px 0px #000000",
    transition: "all 0.5s",
  },
}));

export const ReviewImageTextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  position: "absolute",
  top: "70%",
  left: "8%",
  color: "white",
  zIndex: 1,
}));

export const ReviewCardContainer = styled(Card)(({ theme }) => ({
  display: "flex !important",
  flexDirection: "row",
  width: "100%",
  height: "300px",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
