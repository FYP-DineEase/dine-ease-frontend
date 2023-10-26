import { baseFontSizes } from "./font-sizes";
import { Typography, styled } from "@mui/material";

export const Text = styled(Typography)(({ theme, variant }) => ({
  fontSize: baseFontSizes[variant].default,
  [theme.breakpoints.down("sm")]: {
    fontSize: baseFontSizes[variant].small,
  },
}));

export const BoldText = styled(Text)(({ theme, variant }) => ({
  fontWeight: "bold",
}));

export const ErrorText = styled(Text)(({ theme, variant }) => ({
  color: "red",
}));

export const UnderlinedText = styled(Text)(({ theme, variant }) => ({
  textDecoration: "underline",
}));
