import { TextField, styled } from "@mui/material";
import { FlexContainer } from "@/components/UI/container";

export const MainContainer = styled(FlexContainer)(({ theme }) => ({
  flexDirection: "column",
  gap: theme.spacing(1),
  width: "400px",
  height: "500px",
  borderRadius: "10px",
  backgroundColor: "rgba(245, 245, 245, 0.5)",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
}));

export const Field = styled(TextField)(({ theme }) => ({
  width: "100%",
}));

export const FormOptions = styled(FlexContainer)(({ theme }) => ({
  justifyContent: "space-between",
}));
