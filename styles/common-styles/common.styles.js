import { baseFontSizes } from "@/helpers/font-sizes";

export const Text = styled(Typography)(({ theme, variant }) => ({
  // fontFamily: '"Montserrat", sans-serif',
  fontSize: baseFontSizes[variant].default,
  [theme.breakpoints.down("sm")]: {
    fontSize: baseFontSizes[variant].small,
  },
}));