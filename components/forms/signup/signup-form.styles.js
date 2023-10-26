import { styled } from "@mui/material";

//MUI Global Styled Components
import { PrimaryButton } from "@/components/UI/button";
import { FlexContainer } from "@/components/UI/container";

// import "react-phone-input-2/lib/high-res.css";
// import PhoneInput from "react-phone-input-2";

export const NameFieldContainer = styled(FlexContainer)(({ theme }) => ({
  gap: theme.spacing(2),
}));

export const NameField = styled(FlexContainer)(({ theme, error }) => ({
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "50%",
  maxWidth: "14.5rem",
}));

export const RolesContainer = styled(FlexContainer)(({ theme, selected }) => ({
  gap: theme.spacing(2.5),
}));

export const Roles = styled(PrimaryButton)(({ theme, selected }) => ({
  flexDirection: "column",
  width: "85px",
  height: "70px",
  borderRadius: "5px",
  color: selected ? theme.palette.text.primary : "black",
  backgroundColor: selected
    ? theme.palette.main.secondary
    : theme.palette.text.primary,
  boxShadow: "1px 3px 5px lightgrey",

  "&:hover": {
    backgroundColor: theme.palette.main.primary,
  },
}));

// export const StyledPhoneInput = styled(PhoneInput)(({ theme }) => ({
//   "&.react-phone-number": {
//     border: "none",
//     outline: "none",
//     backgroundColor: "transparent",
//     WebkitAppearance: "none",
//   },
//   "&.react-phone-number input.form-control": {
//     width: "100%",
//     height: "100%",
//     border: "none",
//     backgroundColor: "transparent",
//   },

//   "&.react-phone-number div.flag-dropdown": {
//     border: "none",
//     backgroundColor: "transparent",
//   },
// }));
