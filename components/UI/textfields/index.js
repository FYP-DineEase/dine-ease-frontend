import { TextField, styled } from "@mui/material";
import { baseFontSizes } from "../typography/font-sizes";

export const InputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  input: {
    color: theme.palette.static.secondary,

    "&:hover": {
      borderColor: theme.palette.main.primary,
    },
  },

  "& label.Mui-focused": {
    color: theme.palette.main.primary,
  },

  "& .MuiFormHelperText-root": {
    fontSize: baseFontSizes.sub.default,
    margin: 0,
  },

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.main.primary,
  },

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.main.secondary,
  },

  "& .MuiSvgIcon-root": {
    color: theme.palette.main.primary,
  },
}));
