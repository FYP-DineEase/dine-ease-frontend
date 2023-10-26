//MUI Components
import { Checkbox, styled } from "@mui/material";

//MUI Global Styled Components
import { FlexContainer } from "@/components/UI/container";
import { PrimaryButton } from "@/components/UI/button";

export const LoginOptions = styled(FlexContainer)(({ theme }) => ({
  justifyContent: "space-between",
}));

export const RememberCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.main.primary,
  "&.Mui-checked": {
    color: theme.palette.main.primary,
  },
}));

export const LoginButton = styled(PrimaryButton)(({ theme }) => ({
  width: "40%",
}));
