import { Box, styled } from "@mui/material";

export const FlexContainer = styled(Box)(({ theme, variant }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
