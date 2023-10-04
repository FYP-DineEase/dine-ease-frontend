import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import { Box, Container } from "@mui/material";
import React from "react";
import { SectionHeading } from "../HomePage.styles";

const RestaurantsNearby = () => {
  return (
    <Container disableGutters maxWidth="xl">
      <SectionHeading>
        <ResponsiveText variant="header">
          Discover Restaurants Near You
        </ResponsiveText>
      </SectionHeading>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            minHeight: "350px",
            height: "60vh",
            backgroundColor: "red",
            width: "95%",
          }}
        />
      </Box>
    </Container>
  );
};

export default RestaurantsNearby;
