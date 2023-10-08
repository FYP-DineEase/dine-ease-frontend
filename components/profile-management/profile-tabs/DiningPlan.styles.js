import { Box, styled } from "@mui/material";

export const DiningPlansContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  padding: "4rem 8vw",

  [theme.breakpoints.down("sm")]: {
    gap: "1rem",
  },
}));

export const PlanImage = styled(Box)(({ theme }) => ({
  borderRadius: 1,
  height: "160px",
  width: "190px",
  position: "relative",

  [theme.breakpoints.down("sm")]: {
    order: "2",
    width: "100%",
  },

  "&:after": {
    borderRadius: "5px",
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    boxShadow: "inset 0 -55px 100px 0px #000000",
    transition: "all 0.5s",
  },
}));

export const PlanImageText = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "75%",
  left: "10%",
  color: "white",
  zIndex: 1,

  [theme.breakpoints.down("sm")]: {
    top: "0",
    left: "0",
    height: "85%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

export const PlanDetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1.75rem",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const IconBox = styled(Box)(({ theme }) => ({
  marginLeft: "auto",

  [theme.breakpoints.down("sm")]: {
    order: "1",
  },
}));

export const PlanDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  [theme.breakpoints.down("sm")]: {
    order: "3",
  },
}));
