import React, { useState } from "react";

import Link from "next/link";

import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

import { useFormik } from "formik";

import { loginSchema } from "@/utils/validationSchema";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";

import {
  FormContainer,
  FormHeader,
  FormItemsContainer,
  FormSnackbar,
} from "../form.styles";

const LoginField = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    details: "",
    type: "error",
  });

  const handleClose = () => {
    setSnackbar((prevState) => ({ ...prevState, open: false }));
  };

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const submitHandler = (values, actions) => {

    alert(JSON.stringify(values))


    // dispatch(
    //   authActions.loginHandler({
    //     type: "LOGIN",
    //     email: values.email,
    //     password: values.password,
    //   })
    // );
    // formik.setSubmitting(true);
    // setSnackbar({
    //   open: true,
    //   details: "Halo Im a Snackbar",
    //   type: "error",
    // });
    // formik.setSubmitting(false);
  };

  const rememberChangeHandler = (event) => {
    setRemember(event.target.checked);
  };

  const viewPassHandler = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: "nagitazy@tutuapp.bid",
      password: "Mujtaba@123",
    },
    validationSchema: loginSchema,
    onSubmit: submitHandler,
  });
  return (
    <FormContainer>
      <FormSnackbar
        open={snackbar.open}
        autoHideDuration={10000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert severity={snackbar.type}>
          {snackbar.details || "Server is down , please try again later"}
        </Alert>
      </FormSnackbar>
      <FormItemsContainer component="form" onSubmit={formik.handleSubmit}>
        <Box textAlign="center">
          <LocalDiningIcon sx={{ color: "darkorange", fontSize: "70px" }} />
        </Box>
        <FormHeader>
          <ResponsiveText variant="header">Log In</ResponsiveText>
        </FormHeader>
        <TextField
          id="email"
          error={formik.errors.email && formik.touched.email}
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          color="warning"
        />
        <Box>
          {formik.errors.email && formik.touched.email && (
            <ResponsiveText variant="body" sx={{ color: "red" }}>
              {formik.errors.email}
            </ResponsiveText>
          )}
        </Box>
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
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={viewPassHandler}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box>
          {formik.errors.password && formik.touched.password && (
            <ResponsiveText variant="body" sx={{ color: "red" }}>
              {formik.errors.password}
            </ResponsiveText>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={rememberChangeHandler}
                  sx={{
                    color: "#ff6b81",
                    "&.Mui-checked": {
                      color: "#ff6b81",
                    },
                  }}
                />
              }
              label="Remember Me"
            />
          </FormGroup>
          <Link href="/reset-password">
            <ResponsiveText variant="body">Forgot Password?</ResponsiveText>
          </Link>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}
            sx={{
              backgroundColor: "#ff6b81",
              width: "8rem",
            }}
          >
            Login
          </Button>
        </Box>
        <Box textAlign="center">
          <Link href="/signup">
            <ResponsiveText variant="mainBody">
              Not a member? Sign up now.
            </ResponsiveText>
          </Link>
        </Box>
      </FormItemsContainer>
    </FormContainer>
  );
};

export default LoginField;
