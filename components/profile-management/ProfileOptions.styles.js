import { Box, styled } from "@mui/material";

export const ProfileOptionsContainer = styled(Box)(({ theme }) => ({
  height: "900px",
  display: "flex",
  flexDirection: "column",
  //   border: "1px solid red",
  backgroundColor: "darkorange",
  color: "white",
  gap: "3rem",
  padding: "10rem 0",

  [theme.breakpoints.down("md")]: {
    padding: "2rem 0",
    height: "auto",
    gap: "2rem",
  },
}));

export const ProfileAvatar = styled(Box)(({ theme }) => ({
  width: "100%",
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
}));

export const ProfileOptionsList = styled(Box)(({ theme }) => ({
  width: "100%",
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  paddingLeft: "1.5vw",
  gap: "1.5rem",

  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
}));
