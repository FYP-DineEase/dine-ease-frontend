import { Divider, styled } from "@mui/material";

export const CustomDivider = styled(Divider)(({ theme }) => ({
  color: theme.palette.static.ternary,
}));
