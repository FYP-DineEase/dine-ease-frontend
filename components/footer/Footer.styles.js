import { styled } from "@mui/material";
import { VerticalContainer } from "../UI";

export const SocialContainer = styled(VerticalContainer)(({ theme }) => ({
  gap: theme.spacing(1),
  height: "100%",
}));

export const RightsContainer = styled(VerticalContainer)(({ theme }) => ({
  height: "100%",
  textAlign: "center",
}));
