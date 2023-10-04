import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/restaurant.jpg";

import { useFormik } from "formik";
import { loginSchema, signupSchema } from "@/utils/validationSchema";
import { NameFieldContainer } from "./SignupForm.styles";
import {
  FormContainer,
  FormItemsContainer,
  FormPageContainer,
  ImageContainer,
  InputField,
  InputFieldContainer,
} from "../form.styles";
import SignupField from "./SignupField";
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
