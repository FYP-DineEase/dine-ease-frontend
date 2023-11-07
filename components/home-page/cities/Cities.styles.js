import { Box, styled } from "@mui/material";

export const CitiesContainer = styled(Box)(({ theme }) => ({
  height: "350px",
  position: "relative",
  cursor: "pointer",

  [theme.breakpoints.down("sm")]: {
    height: "220px",
  },

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

  "&:hover:after": {
    boxShadow: "inset 0 -25px 100px 0px #000000",
  },
}));

export const CitiesTextContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "80%",
  left: "10%",
  color: "white",
  zIndex: 1,
}));