import { TextField, styled } from "@mui/material";
import { baseFontSizes } from "../typography/font-sizes";

export const InputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  input: {
    color: theme.palette.static.secondary,
  },

  "& label.Mui-focused": {
    color: theme.palette.main.primary,
  },

  "& .MuiFormHelperText-root": {
    fontSize: baseFontSizes.sub.default,
    margin: 0,
  },

  "& .Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.main.primary}`,
    },
  },

  "& .MuiSvgIcon-root": {
    color: theme.palette.main.primary,
  },
}));
