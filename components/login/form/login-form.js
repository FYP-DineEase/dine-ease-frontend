import React, { useState } from "react";
import Link from "next/link";

// Form
import { useFormik } from "formik";
import { loginSchema } from "@/utils/validation-schema/login";

// Snackbar
import { enqueueSnackbar } from "notistack";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Styles
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
import { BoldText, ErrorText, Text } from "@/components/UI/typography";
import { FlexContainer } from "@/components/UI/containers";
import * as Styles from "./login-form.styles";
import { PrimaryButton } from "@/components/UI/buttons";

const LoginForm = () => {
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
    <Styles.FormItemsContainer component="form" onSubmit={formik.handleSubmit}>
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
          color="warning">
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
      <FlexContainer sx={{ justifyContent: "space-between" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Styles.RememberCheckbox
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
      </FlexContainer>

      <PrimaryButton
        variant="contained"
        type="submit"
        sx={{ width: "50%", margin: "auto" }}
        disabled={formik.isSubmitting}>
        <Text variant="sub">Login</Text>
      </PrimaryButton>

      <FlexContainer>
        <Link href="/signup">
          <Text variant="body">Not a member? </Text>
          <Text variant="body">
            Sign up now.
          </Text>
        </Link>
      </FlexContainer>
    </Styles.FormItemsContainer>
  );
};

export default LoginForm;
