import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "@/utils/validation-schema/login";
import { enqueueSnackbar } from "notistack";

// styling
import { Container } from "@mui/material";
import { Text } from "@/components/UI/typography";
import { PrimaryButton } from "@/components/UI/button";
import * as Styles from "./login-form.styles";

// icons
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const rememberChangeHandler = (event) => {
    setRemember(event.target.checked);
  };

  const submitHandler = (values, actions) => {
    enqueueSnackbar({ variant: "success", message: "Invalid Credentials." });
    formik.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: loginSchema,
    onSubmit: submitHandler,
  });

  return (
    <Styles.MainContainer component="form" onSubmit={formik.handleSubmit}>
      <Text variant="header">Welcome</Text>
      <Text variant="subHeader">login to continue</Text>
      <Container>
        <Styles.Field
          id="email"
          error={formik.errors.email && formik.touched.email}
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          color="warning"
        />
        <Styles.Field
          id="password"
          error={formik.errors.email && formik.touched.email}
          label="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          color="warning"
        />
        <PrimaryButton variant="contained" type="submit" disabled={formik.isSubmitting}>
          Login
        </PrimaryButton>
      </Container>
    </Styles.MainContainer>
  );
};

export default LoginForm;
