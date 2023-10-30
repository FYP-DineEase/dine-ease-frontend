import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

// Services
import { login } from "@/services";

// Form
import { useFormik } from "formik";
import { loginSchema } from "@/utils/validation-schema/login";

// Snackbar
import { enqueueSnackbar } from "notistack";
import { getError } from "@/helpers/snackbarHelpers";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Styles
import { FormControlLabel, FormGroup, IconButton, InputAdornment } from "@mui/material";
import {
  Text,
  FormButton,
  InputField,
  PrimaryText,
  FlexContainer,
  FormContainer,
  CustomCheckbox,
} from "@/components/UI";

const LoginForm = () => {
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const rememberChangeHandler = (event) => {
    setRemember(event.target.checked);
  };

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      const res = await login(values);
      console.log(res.data);
    } catch (e) {
      enqueueSnackbar({ variant: "error", message: getError(e) });
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "gobes29957@zamaneta.com",
      password: "Ahmed@123",
    },
    validationSchema: loginSchema,
    onSubmit: submitHandler,
  });

  return (
    <FormContainer component="form" onSubmit={formik.handleSubmit}>
      <Text variant="header" textAlign={"center"} fontWeight={800}>
        Welcome to DineEase
      </Text>
      <Text variant="main" textAlign={"center"} fontWeight={500} mb={3}>
        Login to your account
      </Text>

      <InputField
        name="email"
        label="Email"
        variant="outlined"
        placeholder="Enter Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email && Boolean(formik.touched.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <InputField
        name="password"
        label="Password"
        variant="outlined"
        placeholder="Enter Password"
        type={showPassword ? "text" : "password"}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password && Boolean(formik.touched.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FlexContainer sx={{ justifyContent: "space-between" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <CustomCheckbox checked={remember} onChange={rememberChangeHandler} />
            }
            label="Remember me"
          />
        </FormGroup>
        <Link href="/reset-password">
          <Text>Forgot Password?</Text>
        </Link>
      </FlexContainer>

      <FormButton type="submit" disabled={formik.isSubmitting}>
        <Text variant="sub">Login</Text>
      </FormButton>

      <Link href="/signup" style={{ textAlign: "center" }}>
        <Text>Not a member? </Text>
        <PrimaryText>Signup now.</PrimaryText>
      </Link>
    </FormContainer>
  );
};

export default LoginForm;
