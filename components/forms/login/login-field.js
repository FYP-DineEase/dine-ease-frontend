import React, { useState } from "react";

import Link from "next/link";

//Formik
import { useFormik } from "formik";

//Validation Schema
import { loginSchema } from "@/utils/validation-schema/login";

//Snackbar
import { enqueueSnackbar } from "notistack";

//Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//MUI Components
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

//MUI Global Styled Components
import {
  BoldText,
  ErrorText,
  Text,
  UnderlinedText,
} from "@/components/UI/typography";
import { FlexContainer } from "@/components/UI/container";

//Styled Components
import * as Styles from "../form.styles";
import * as LoginStyles from "./login-form.styles";

const LoginField = () => {
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const rememberChangeHandler = (event) => {
    setRemember(event.target.checked);
  };

  const viewPassHandler = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const submitHandler = (values, actions) => {
    enqueueSnackbar({ variant: "error", message: "Invalid Credentials." });
    formik.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: submitHandler,
  });

  return (
    <Styles.FormContainer>
      <Styles.FormItemsContainer
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <FlexContainer>
          <Styles.Icon />
        </FlexContainer>
        <Styles.FormHeader>
          <BoldText variant="header">Log In</BoldText>
        </Styles.FormHeader>
        <TextField
          id="email"
          error={formik.errors.email && formik.touched.email}
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <ErrorText variant="body">{formik.errors.email}</ErrorText>
        )}
        <FormControl variant="outlined">
          <InputLabel
            htmlFor="password"
            error={formik.errors.password && formik.touched.password}
            color="warning"
          >
            Password
          </InputLabel>
          <OutlinedInput
            error={formik.errors.password && formik.touched.password}
            id="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            color="warning"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={viewPassHandler} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {formik.errors.password && formik.touched.password && (
          <ErrorText variant="body">{formik.errors.password}</ErrorText>
        )}
        <LoginStyles.LoginOptions>
          <FormGroup>
            <FormControlLabel
              control={
                <LoginStyles.RememberCheckbox
                  checked={remember}
                  onChange={rememberChangeHandler}
                />
              }
              label="Remember Me"
            />
          </FormGroup>
          <Link href="/reset-password">
            <Text variant="body">Forgot Password?</Text>
          </Link>
        </LoginStyles.LoginOptions>
        <FlexContainer>
          <Styles.Button
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}
          >
            <Text variant="sub">Login</Text>
          </Styles.Button>
        </FlexContainer>
        <FlexContainer>
          <Link href="/signup">
            <Text variant="body">Not a member? </Text>
            <UnderlinedText variant="body">Sign up now.</UnderlinedText>
          </Link>
        </FlexContainer>
      </Styles.FormItemsContainer>
    </Styles.FormContainer>
  );
};

export default LoginField;
