import { Box, Button, styled } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";

export const NameFieldContainer = styled(Box)(({ theme, error }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "50%",
  maxWidth: "14.5rem",
}));

export const StyledPhoneInput = styled(PhoneInput)(({ theme }) => ({
  "&.react-phone-number": {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    WebkitAppearance: "none",
  },
  "&.react-phone-number input.form-control": {
    width: "100%",
    height: "100%",
    border: "none",
    backgroundColor: "transparent",
  },

  "&.react-phone-number div.flag-dropdown": {
    border: "none",
    backgroundColor: "transparent",
  },
}));

export const RoleContainer = styled(Button)(({ selected }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "75px",
  height: "60px",
  backgroundColor: "white",
  border: "1px solid transparent",
  borderRadius: "5px",
  backgroundColor: selected && "pink",
  boxShadow: "1px 3px 5px lightgrey",

  "&:hover": {
    boxShadow: "1px 3px 5px pink",
  },

  // "&:before": {
  //   content: `""`,
  //   position: "absolute",
  //   right: "0",
  //   bottom: "0",
  //   width: "2px",
  //   height: "100%",
  //   background: "linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% )",
  //   zIndex: "-1",
  //   transition: "all 0.5s cubic-bezier(0.23, 1, 0.320, 1)",
  // },

  // "&:hover:before": {
  //   width: "100%",
  // },
}));
