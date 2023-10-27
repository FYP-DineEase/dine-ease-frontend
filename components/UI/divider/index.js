import { Divider, styled } from "@mui/material";

export const FormDivider = styled(Divider)(({ theme }) => ({
  width: "1px",
  height: "50%",
  backgroundColor: theme.palette.main.primary,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
