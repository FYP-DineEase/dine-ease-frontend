import { baseFontSizes } from "./font-sizes";
import { Typography, styled } from "@mui/material";

export const Text = styled(Typography)(({ theme, variant }) => ({
  fontSize: baseFontSizes[variant].default,
  [theme.breakpoints.down("sm")]: {
    fontSize: baseFontSizes[variant].small,
  },
}));
