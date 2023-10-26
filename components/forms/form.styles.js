//MUI Components
import { Box, Grid, styled } from "@mui/material";

//MUI Global Styled Components
import { FlexContainer } from "../UI/container";
import { PrimaryButton } from "../UI/button";

//Icons
import LocalDiningIcon from "@mui/icons-material/LocalDining";

export const FormImageContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  minHeight: "1000px",
  position: "relative",

  // "&:before": {
  //   content: '""',
  //   position: "absolute",
  //   top: "0",
  //   left: "0",
  //   width: "100%",
  //   height: "100%",
  //   zIndex: "1",
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  //   boxShadow: "inset 20px 20px 200px #000000, inset -20px -20px 200px #000000",
  // },
}));

export const MainGrid = styled(Grid)(({ theme }) => ({
  minHeight: "100vh",
  overflow: "hidden",
  justifyContent: "center",
}));

export const FormContainer = styled(FlexContainer)(({ theme }) => ({
  height: "100%",
}));

export const FormItemsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "clamp(300px,400px,600px)",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
    padding: `${theme.spacing(1)} ${theme.spacing(0)}`,
  },
}));

// export const FormImageTextContainer = styled(FlexContainer)(({ theme }) => ({
//   height: "100%",
//   width: "100%",
//   flexDirection: "column",
//   color: "white",
//   gap: "2rem",
//   textAlign: "center",
//   position: "absolute",
//   zIndex: "1",
// }));

export const FormHeader = styled(FlexContainer)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const ImageGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const Icon = styled(LocalDiningIcon)(({ theme }) => ({
  color: theme.palette.main.primary,
  fontSize: "70px",
}));

export const Button = styled(PrimaryButton)(({ theme }) => ({
  width: "40%",
}));
