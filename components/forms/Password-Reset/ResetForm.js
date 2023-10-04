import React, { useState } from "react";
import { FormPageContainer } from "../form.styles";
import { Grid } from "@mui/material";
import ResetField from "./ResetField";
import FormImage from "../FormImage";

const ResetForm = () => {
  return (
    <FormPageContainer maxWidth={false} disableGutters>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={5}>
          <ResetField />
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", md: "block" },
          }}
          xs={12}
          md={7}
        >
          <FormImage
            headerText="Reset Password"
            subHeaderText="Ready to immerse yourself in a world of gastronomic delights? Log in to continue your culinary journey."
          />
        </Grid>
      </Grid>
    </FormPageContainer>
  );
};

export default ResetForm;
