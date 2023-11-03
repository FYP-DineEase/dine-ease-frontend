import { Box, styled } from "@mui/material";

export const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "300px",
  minHeight: "500px",
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: "24",
  padding: theme.spacing(4),
}));
