import { Checkbox, Box, styled } from "@mui/material";
import { FlexContainer } from "@/components/UI/containers";

export const RememberCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.main.primary,
  "&.Mui-checked": {
    color: theme.palette.main.primary,
  },
}));

export const FormItemsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "420px",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    width: "300px",
    marginTop: theme.spacing(4),
    padding: `${theme.spacing(1)} ${theme.spacing(0)}`,
  },
}));

export const FormHeader = styled(FlexContainer)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));
