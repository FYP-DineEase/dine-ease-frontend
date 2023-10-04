import { styled, Container, Box, Snackbar } from "@mui/material";

export const FormPageContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  width: "100vw",
  overflow: "hidden",
  backgroundColor: "whitesmoke",
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: "0 8vw",
  [theme.breakpoints.down("md")]: {
    padding: "0",
  },
}));

export const FormItemsContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "clamp(300px,400px,600px)",
  gap: "1rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "7rem",
    padding: "1rem 0",
  },
}));

export const InputField = styled("input")(({ theme, error }) => ({
  all: "unset",
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  WebkitAppearance: "none",
}));

export const InputFieldContainer = styled(Box)(({ theme, error }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  width: "100%",
  height: "2.5rem",
  padding: "0 0.5rem",
  color: "black",
  outline: "none",
  borderStyle: "none",
  borderBottom: "1px solid black",
  borderColor: error && "red",

  "&:focus-within": {
    borderColor: error ? "red" : "blue",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const FormImageContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  minHeight: "1000px",
  position: "relative",

  "&:before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "1",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: "inset 20px 20px 200px #000000, inset -20px -20px 200px #000000",
  },
}));

export const FormImageTextContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  textAlign: "center",
  position: "absolute",
  zIndex: "1",
}));

export const FormHeader = styled(Box)(({ theme }) => ({
  marginBottom: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
}));

export const FormSnackbar = styled(Snackbar)(({ theme }) => ({
  "&.MuiSnackbar-root": { top: "15%" },

  [theme.breakpoints.down("md")]: {
    "&.MuiSnackbar-root": { top: "8%" },
  },
}));
