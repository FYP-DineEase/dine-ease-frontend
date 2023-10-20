import React from "react";
import { Box, Container } from "@mui/material";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import { SectionHeading } from "../HomePage.styles";

const RestaurantsNearby = () => {
  return (
    <Container maxWidth="xl">
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
            backgroundColor: "lightyellow",
            width: "100%",
          }}
        />
      </Box>
    </Container>
  );
};

export default RestaurantsNearby;
