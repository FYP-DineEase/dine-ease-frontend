import React from "react";

//MUI Components
import { Grid } from "@mui/material";

//Styled Components
import * as Styles from "../form.styles";

// Components imported
import FormImage from "../form-image";
import ResetPasswordField from "./reset-password-field";

const ResetPasswordForm = () => {
  return (
    <Styles.MainGrid container>
      <Grid item xs={10} md={6}>
        <ResetPasswordField />
      </Grid>
      <Styles.ImageGrid item xs={12} md={6}>
        <FormImage />
      </Styles.ImageGrid>
    </Styles.MainGrid>
  );
};

export default ResetPasswordForm;
