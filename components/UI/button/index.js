import { Button, styled } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme, variant }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  backgroundColor: theme.palette.main.primary,
  color: theme.palette.text.primary,

  "&:hover": {
    backgroundColor: theme.palette.main.secondary,
  },
}));
