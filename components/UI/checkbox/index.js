import { Checkbox, styled } from "@mui/material";

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.main.primary,
  "&.Mui-checked": {
    color: theme.palette.main.primary,
  },
}));