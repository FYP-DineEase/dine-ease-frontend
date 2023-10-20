import React, { useState } from "react";

import Link from "next/link";

import { useFormik } from "formik";

import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

import { signupSchema } from "@/utils/validationSchema";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";

import { NameFieldContainer } from "./SignupForm.styles";

import {
  FormContainer,
  FormHeader,
  FormItemsContainer,
  FormSnackbar,
  InputField,
  InputFieldContainer,
} from "../form.styles";

import SignupRoles from "./SignupRoles";

const SignupField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    details: "",
    type: "success",
  });

  const submitHandler = (values, actions) => {

    console.log(JSON.stringify(values))

    // dispatch(
    //   authActions.loginHandler({
    //     type: "LOGIN",
    //     email: values.email,
    //     password: values.password,
    //   })
    // );
    // console.log("first");
    // formik.setSubmitting(true);
    // setSnackbar({
    //   open: true,
    //   details: "Halo Im a Snackbar",
    //   type: "error",
    // });
    // formik.setSubmitting(false);
  };

  const handleClose = () => {
    setSnackbar((prevState) => ({ ...prevState, open: false }));
  };

  const viewPassHandler = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "Mujtaba",
      lastName: "Shafiq",
      email: "nagitazy@tutuapp.bid",
      password: "Mujtaba@123",
      confirmPassword: "Mujtaba@123",
    },
    validationSchema: signupSchema,
    onSubmit: submitHandler,
  });

  // const onValueChange = (phoneNumber) => {
  //   formik.setFieldValue("phoneNumber", phoneNumber);
  // };

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
          <ResponsiveText variant="header">Sign Up</ResponsiveText>
        </FormHeader>
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <NameFieldContainer>
            <TextField
              id="firstName"
              error={formik.errors.firstName && formik.touched.firstName}
              label="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              color="warning"
            />
            <Box>
              {formik.errors.firstName && formik.touched.firstName && (
                <ResponsiveText variant="body" sx={{ color: "red" }}>
                  {formik.errors.firstName}
                </ResponsiveText>
              )}
            </Box>
          </NameFieldContainer>
          <NameFieldContainer>
            <TextField
              id="lastName"
              error={formik.errors.lastName && formik.touched.lastName}
              label="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              color="warning"
            />
            <Box>
              {formik.errors.lastName && formik.touched.lastName && (
                <ResponsiveText variant="body" sx={{ color: "red" }}>
                  {formik.errors.lastName}
                </ResponsiveText>
              )}
            </Box>
          </NameFieldContainer>
        </Box>
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
        {/* <Box textAlign="left">
          <ResponsiveText variant="mainBody">Phone Number</ResponsiveText>
        </Box>
        <InputFieldContainer
          error={
            Boolean(formik.errors.phoneNumber) && formik.touched.phoneNumber
          }
        >
          <StyledPhoneInput
            country={"pk"}
            onChange={onValueChange}
            onBlur={formik.handleBlur}
            containerClass={`react-phone-number`}
            value={formik.values.phoneNumber}
            inputProps={{
              name: "phoneNumber",
            }}
          />
        </InputFieldContainer>
        <Box>
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <ResponsiveText variant="body" sx={{ color: "red" }}>
              {formik.errors.phoneNumber}
            </ResponsiveText>
          )}
        </Box> */}
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
        <FormControl variant="outlined">
          <InputLabel
            htmlFor="confirmPassword"
            error={
              formik.errors.confirmPassword && formik.touched.confirmPassword
            }
            color="warning"
          >
            Confirm Password
          </InputLabel>
          <OutlinedInput
            error={
              formik.errors.confirmPassword && formik.touched.confirmPassword
            }
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
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
            label="Confirm Password"
          />
        </FormControl>
        <Box>
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <ResponsiveText variant="body" sx={{ color: "red" }}>
              {formik.errors.confirmPassword}
            </ResponsiveText>
          )}
        </Box>
        <SignupRoles />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            variant="contained"
            sx={{
              backgroundColor: "#ff6b81",
              width: "8rem",
            }}
          >
            Signup
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link href="/login">
            <ResponsiveText variant="mainBody">
              Already a member? Log In.
            </ResponsiveText>
          </Link>
        </Box>
      </FormItemsContainer>
    </FormContainer>
  );
};

export default SignupField;
