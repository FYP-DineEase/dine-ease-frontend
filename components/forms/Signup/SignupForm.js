import React from "react";

import { Grid } from "@mui/material";

import SignupField from "./SignupField";

import { FormPageContainer } from "../form.styles";

import FormImage from "../FormImage";

const SignupForm = () => {
  return (
    <FormPageContainer maxWidth={false} disableGutters>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={5}>
          <SignupField />
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
            headerText="Elevate your dining experience."
            subHeaderText="Become a part of our culinary story. Create an account today to step in a world of gastronomic delights."
          />
        </Grid>
      </Grid>
    </FormPageContainer>
  );
};

export default SignupForm;
