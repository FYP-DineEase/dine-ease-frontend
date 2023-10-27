import React from "react";
import Image from "next/image";
import LoginForm from "./form/login-form";

// Styles
import { Grid } from "@mui/material";
import { CustomDivider } from "../UI/divider";
import { SecondaryContainer } from "../UI/containers";

const Login = () => {
  return (
    <SecondaryContainer container>
      <Grid item xs={12} md={5}>
        <LoginForm />
      </Grid>

      <Grid item width={"1px"} display={{ xs: "none", md: "block" }} height="40%">
        <CustomDivider orientation="vertical" />
      </Grid>
      
      <Grid item xs={12} md={5} display={{ xs: "none", md: "block" }}>
        <Image
          src={"/assets/images/food.svg"}
          width={800}
          height={800}
          alt="login-image"
        />
      </Grid>
    </SecondaryContainer>
  );
};

export default Login;
