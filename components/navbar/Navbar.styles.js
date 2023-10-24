import { AppBar, Box, styled } from "@mui/material";
import { FlexContainer } from "@/components/UI/container";

export const MainContainer = styled(AppBar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  height: "75px",
  width: "100%",
  position: "fixed",
  background: "rgba(180, 180, 180, 0.2)",
  backdropFilter: "blur(5px)",
  zIndex: "999",
  boxShadow: "none",
  transition: "all 0.5s",
}));

export const LinkContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "none",
  color: theme.palette.static.secondary,
  borderRadius: "30px",
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  fontWeight: 500,

  "&:hover": {
    backgroundColor: "rgba(245, 246, 250, 0.7)",
  },
}));

export const AuthLink = styled(LinkContainer)(({ fill, theme }) => ({
  color: fill ? theme.palette.static.primary : theme.palette.main.primary,
  backgroundColor: fill ? theme.palette.main.primary : "rgba(245, 246, 250, 0.9)",
  // border: !fill && `2px solid ${theme.palette.main.primary}`,
  boxShadow: !fill && `inset 0px 0px 0px 2px ${theme.palette.main.primary}`,
  transition: "box-shadow 0.3s",

  "&:hover": {
    backgroundColor: fill ? theme.palette.main.secondary : "rgba(245, 246, 250, 0.85)",
  },
}));

export const NavContainer = styled(FlexContainer)(({ auth, theme }) => ({
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
