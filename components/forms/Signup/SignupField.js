import React, { useState } from "react";
import {
  FormContainer,
  FormHeader,
  FormItemsContainer,
  FormSnackbar,
  InputField,
  InputFieldContainer,
} from "../form.styles";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import { Alert, Box, Button } from "@mui/material";
import {
  NameFieldContainer,
  RoleContainer,
  StyledPhoneInput,
} from "./SignupForm.styles";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import { signupSchema } from "@/utils/validationSchema";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignupField = () => {
  const [selectedRole, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    details: "",
    type: "success",
  });

  const roles = [
    { id: "user", text: "User", icon: <PersonIcon /> },
    { id: "manager", text: "Manager", icon: <RestaurantIcon /> },
  ];
  const submitHandler = (values, actions) => {
    // dispatch(
    //   authActions.loginHandler({
    //     type: "LOGIN",
    //     email: values.email,
    //     password: values.password,
    //   })
    // );
    console.log("first");
    formik.setSubmitting(true);
    setSnackbar({
      open: true,
      details: "Halo Im a Snackbar",
      type: "error",
    });
    formik.setSubmitting(false);
  };

  const roleSelectionHandler = (role) => {
    setRole(role);
    console.log(role);
  };

  const handleClose = () => {
    setSnackbar((prevState) => ({ ...prevState, open: false }));
  };

  const viewPassHandler = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      // phoneNumber: "",
    },
    validationSchema: signupSchema,
    onSubmit: submitHandler,
  });

  const onValueChange = (phoneNumber) => {
    formik.setFieldValue("phoneNumber", phoneNumber);
  };

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
      <FormItemsContainer onSubmit={formik.handleSubmit}>
        <FormHeader>
          <ResponsiveText variant="header">Sign Up</ResponsiveText>
        </FormHeader>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <NameFieldContainer>
            <Box textAlign="left">
              <ResponsiveText variant="mainBody">First Name</ResponsiveText>
            </Box>
            <InputFieldContainer
              error={
                Boolean(formik.errors.firstName) && formik.touched.firstName
                  ? 1
                  : 0
              }
            >
              <InputField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                id="firstName"
                type="text"
                placeholder="Enter First Name"
              />
            </InputFieldContainer>
            <Box>
              {formik.errors.firstName && formik.touched.firstName && (
                <ResponsiveText variant="body" sx={{ color: "red" }}>
                  {formik.errors.firstName}
                </ResponsiveText>
              )}
            </Box>
          </NameFieldContainer>
          <NameFieldContainer>
            <Box textAlign="left">
              <ResponsiveText variant="mainBody">Last Name</ResponsiveText>
            </Box>
            <InputFieldContainer
              error={
                Boolean(formik.errors.lastName) && formik.touched.lastName
                  ? 1
                  : 0
              }
            >
              <InputField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
              />
            </InputFieldContainer>
            <Box>
              {formik.errors.lastName && formik.touched.lastName && (
                <ResponsiveText variant="body" sx={{ color: "red" }}>
                  {formik.errors.lastName}
                </ResponsiveText>
              )}
            </Box>
          </NameFieldContainer>
        </Box>
        <Box textAlign="left">
          <ResponsiveText variant="mainBody">Email</ResponsiveText>
        </Box>
        <InputFieldContainer
          error={Boolean(formik.errors.email) && formik.touched.email ? 1 : 0}
        >
          <InputField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            id="email"
            type="email"
            placeholder="Enter Email"
          />
        </InputFieldContainer>
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
        <ResponsiveText variant="mainBody">Password</ResponsiveText>
        <InputFieldContainer
          error={
            Boolean(formik.errors.password) && formik.touched.password ? 1 : 0
          }
        >
          <InputField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
          />
          {showPassword ? (
            <VisibilityOffIcon
              onClick={viewPassHandler}
              sx={{ cursor: "pointer" }}
            />
          ) : (
            <VisibilityIcon
              onClick={viewPassHandler}
              sx={{ cursor: "pointer" }}
            />
          )}
        </InputFieldContainer>
        <Box>
          {formik.errors.password && formik.touched.password && (
            <ResponsiveText variant="body" sx={{ color: "red" }}>
              {formik.errors.password}
            </ResponsiveText>
          )}
        </Box>
        <ResponsiveText variant="mainBody">Confirm Password</ResponsiveText>
        <InputFieldContainer
          error={
            Boolean(formik.errors.confirmPassword) &&
            formik.touched.confirmPassword
              ? 1
              : 0
          }
        >
          <InputField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Re-enter Password"
          />
          {showPassword ? (
            <VisibilityOffIcon
              onClick={viewPassHandler}
              sx={{ cursor: "pointer" }}
            />
          ) : (
            <VisibilityIcon
              onClick={viewPassHandler}
              sx={{ cursor: "pointer" }}
            />
          )}
        </InputFieldContainer>
        <Box>
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <ResponsiveText variant="body" sx={{ color: "red" }}>
              {formik.errors.confirmPassword}
            </ResponsiveText>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          {roles.map((role) => (
            <RoleContainer
              key={role.id}
              selected={selectedRole.includes(role.id)}
              onClick={(event) => roleSelectionHandler(role.id)}
              color="inherit"
            >
              {role.icon}
              <ResponsiveText variant="helper">{role.text}</ResponsiveText>
            </RoleContainer>
          ))}
        </Box>
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
