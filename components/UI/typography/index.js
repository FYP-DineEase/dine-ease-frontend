import { Typography, styled } from "@mui/material";
import { baseFontSizes } from "./font-sizes";

export const Text = styled(Typography)(({ theme, variant }) => ({
  fontSize: baseFontSizes[variant].default,
  [theme.breakpoints.down("sm")]: {
    fontSize: baseFontSizes[variant].small,
  },
}));

export const PrimaryText = styled(Text)(({ theme }) => ({
  color: theme.palette.main.primary,
}));

export const ErrorText = styled(Text)(({ theme }) => ({
  color: "#ff7675",
}));

