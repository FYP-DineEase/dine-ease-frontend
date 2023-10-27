import React from "react";
import Image from "next/image";
import LoginForm from "./form/login-form";

// Styles
import { Grid } from "@mui/material";
import { FormDivider } from "../UI/divider";
import { SecondaryContainer } from "../UI/containers";

const Login = () => {
  return (
    <SecondaryContainer container>
      <Grid item xs={12} md={5}>
        <LoginForm />
      </Grid>

      <FormDivider />

      <Grid item xs={0} md={6} display={{ xs: "none", md: "block" }}>
        <Image
          src={"/assets/images/food.svg"}
          width={1000}
          height={800}
          alt="login-image"
        />
      </Grid>
    </SecondaryContainer>
  );
};

export default Login;
