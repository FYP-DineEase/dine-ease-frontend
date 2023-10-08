import { Box, styled } from "@mui/material";

export const ProfileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  padding: "4rem 8vw",

  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
}));

export const ProfileFields = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: "280px",
}));
