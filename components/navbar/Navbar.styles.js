import { AppBar, Box, Container, styled } from "@mui/material";

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
  minHeight: "80px",
  position: "absolute",
  zIndex: "999",
  backgroundColor: "transparent",
  boxShadow: "none",
  transition: "all 0.75s",
}));

export const NavFullView = styled(Container)(({ theme }) => ({
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const NavResponsiveView = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingBottom: "1rem",
  gap: "0.5rem",
}));
