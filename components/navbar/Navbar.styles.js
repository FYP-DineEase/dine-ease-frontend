import { AppBar, Box, styled } from "@mui/material";
import { FlexContainer } from "@/components/UI/containers";
import { NAV_HEIGHT } from "@/utils/constants";

export const AppBarContainer = styled(AppBar)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  height: `${NAV_HEIGHT}px`,
  width: "100%",
  background: theme.palette.static.primary,
  zIndex: "999",
  transition: "all 0.5s",
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.static.ternary}`,
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
  boxShadow: !fill && `inset 0px 0px 0px 2px ${theme.palette.main.primary}`,
  transition: "box-shadow 0.3s",

  "&:hover": {
    backgroundColor: fill ? theme.palette.main.secondary : "rgba(245, 246, 250, 0.85)",
  },
}));

export const NavContainer = styled(FlexContainer)(({ theme }) => ({
  gap: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
