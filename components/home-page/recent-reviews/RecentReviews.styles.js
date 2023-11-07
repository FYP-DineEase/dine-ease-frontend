import { Box, Card, CardContent, Container, styled } from "@mui/material";

export const RecentActivityContainer = styled(Container)(({ theme }) => ({
  "& .slick-dots": {
    bottom: "-50px",
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

export const ReviewImageContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "45%",
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

  [theme.breakpoints.down("md")]: {
    width: "40%",
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
  color:"black",

  "& .slick-dots li button::before": {
    transition: "all 0.2s ease 0s",
    content: `""`,
    width: "12px",
    height: "12px",
    borderRadius: "100%",
    background: "darkorange",
  },

  // [theme.breakpoints.down("md")]: {
  //   flexDirection: "column",
  // },
}));

export const CardContentContainer = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "55%",
  padding: "1rem 1.75rem",
  backgroundColor: "whitesmoke",

  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
}));

export const ReviewDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
}));
