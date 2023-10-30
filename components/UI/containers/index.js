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
  height: "80%",
  width: "80%",
  margin: "auto",
  alignItems: "center",
  justifyContent: "center",
});

export const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "400px",
  margin: "auto",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
}));
