import { styled } from "@mui/material";
import { PrimaryButton } from "@/components/UI";

export const RoleItem = styled(PrimaryButton)(({ theme, selected }) => ({
  flexDirection: "column",
  width: "95px",
  height: "70px",
  borderRadius: "5px",
  border: `1px solid ${theme.palette.main.primary}`,
  color: selected ? theme.palette.text.primary : "black",
  backgroundColor: selected ? theme.palette.main.secondary : theme.palette.text.primary,
  boxShadow: "1px 3px 5px lightgrey",

  "&:hover": {
    color: theme.palette.text.primary, 
    backgroundColor: theme.palette.main.primary,
  },
}));