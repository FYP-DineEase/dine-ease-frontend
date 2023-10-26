import { Box, styled } from "@mui/material";

export const BaseFlexbox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const FlexContainer = styled(Box)(({ theme, variant }) => ({
  ...BaseFlexbox,
}));
