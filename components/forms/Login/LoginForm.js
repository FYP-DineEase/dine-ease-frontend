import React from "react";

import { Grid } from "@mui/material";

import LoginField from "./LoginField";
import FormImage from "../FormImage";

import { FormPageContainer } from "../form.styles";

const LoginForm = () => {
  return (
    <FormPageContainer maxWidth={false} disableGutters>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={5}>
          <LoginField />
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
            headerText="Welcome back!"
            subHeaderText="Ready to immerse yourself in a world of gastronomic delights? Log in to continue your culinary journey."
          />
        </Grid>
      </Grid>
    </FormPageContainer>
  );
};

export default LoginForm;
