import { AppBar, Box, Container, styled } from "@mui/material";

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
  minHeight: "80px",
  position: "absolute",
  zIndex: "999",
  backgroundColor: "transparent",
  // boxShadow: "none",
  transition: "all 0.75s",

  [theme.breakpoints.down("md")]: {
    backgroundColor: "darkorange",
  },

  "&.nav-animation": {
    position: "fixed",
    backgroundColor: "darkorange",
    animation: "fadeInDown 0.75s linear",

    "@keyframes fadeInDown": {
      "0%": {
        opacity: "0",
        transform: "translate3d(0, -100%, 0);",
      },
      "100%": {
        opacity: "1",
        transform: "translate3d(0, 0, 0);",
      },
    },
  },
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
