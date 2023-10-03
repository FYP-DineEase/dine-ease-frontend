import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";
import { loginSchema } from "@/utils/validationSchema";
import Image from "next/image";
import logo from "@/assets/restaurant.jpg";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import Link from "next/link";
import {
  FormContainer,
  FormItemsContainer,
  FormPageContainer,
  ImageContainer,
  InputField,
  InputFieldContainer,
} from "../form.styles";
import LoginField from "./LoginField";
import FormImage from "../FormImage";

const LoginForm = () => {
  return (
    <FormPageContainer maxWidth={false} disableGutters>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={6} md={5}>
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
