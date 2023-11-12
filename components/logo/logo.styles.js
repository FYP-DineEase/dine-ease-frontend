import { styled } from "@mui/material";
import { LocalDining } from "@mui/icons-material";
import { FlexContainer } from "@/components/UI";

export const LogoContainer = styled(FlexContainer)(({ color, theme }) => ({
  gap: theme.spacing(1),
  color: color === "primary" ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: 500,
}));

export const Logo = styled(LocalDining)(({ variant, theme }) => ({
  fontSize: "3.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));
