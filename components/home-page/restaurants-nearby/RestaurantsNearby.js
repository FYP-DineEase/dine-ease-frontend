import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import { Box, Container } from "@mui/material";
import React from "react";

const RestaurantsNearby = () => {
  return (
    <Container disableGutters maxWidth="false" sx={{ padding: "5rem 1rem" }}>
      <Box
        sx={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold" }}
      >
        <ResponsiveText variant="header">
          Discover Restaurants Near You
        </ResponsiveText>
      </Box>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          minHeight: "350px",
          height: "60vh",
          backgroundColor: "lightyellow",
        }}
      />
    </Container>
  );
};

export default RestaurantsNearby;
