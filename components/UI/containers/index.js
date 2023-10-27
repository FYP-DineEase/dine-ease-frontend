import { Grid, Box, styled } from "@mui/material";
import { NAV_HEIGHT } from "@/utils/constants";

export const FlexContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const PageContainer = styled(Box)({
  marginTop: `${NAV_HEIGHT}px`,
  height: `calc(100vh - ${NAV_HEIGHT}px)`,
});

export const SecondaryContainer = styled(Grid)({
  justifyContent: "center",
  alignItems: "center",
  // height: "100%",
  width: "80%",
  margin: "auto",
});
