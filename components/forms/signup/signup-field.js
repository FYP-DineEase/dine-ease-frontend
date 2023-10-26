import React, { useState } from "react";

import Link from "next/link";

//Formik
import { useFormik } from "formik";

//Validation Schema
import { signupSchema } from "@/utils/validation-schema/signup";

//Snackbar
import { enqueueSnackbar } from "notistack";

//Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//MUI Components
import {
  FormControl,
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
import * as SignupStyles from "./signup-form.styles";

//Components imported
import SignupRoles from "./signup-roles";

const SignupField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (values, actions) => {
    enqueueSnackbar({ variant: "error", message: "Invalid Credentials." });
    formik.setSubmitting(false);
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

  // const onValueChange = (phoneNumber) => {
  //   formik.setFieldValue("phoneNumber", phoneNumber);
  // };

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
          <BoldText variant="header">Sign Up</BoldText>
        </Styles.FormHeader>
        <SignupStyles.NameFieldContainer>
          <SignupStyles.NameField>
            <TextField
              id="firstName"
              error={formik.errors.firstName && formik.touched.firstName}
              label="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              color="warning"
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <ErrorText variant="body">{formik.errors.firstName}</ErrorText>
            )}
          </SignupStyles.NameField>
          <SignupStyles.NameField>
            <TextField
              id="lastName"
              error={formik.errors.lastName && formik.touched.lastName}
              label="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              color="warning"
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <ErrorText variant="body">{formik.errors.lastName}</ErrorText>
            )}
          </SignupStyles.NameField>
        </SignupStyles.NameFieldContainer>
        <TextField
          id="email"
          error={formik.errors.email && formik.touched.email}
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          color="warning"
        />
        {formik.errors.email && formik.touched.email && (
          <ErrorText variant="body">{formik.errors.email}</ErrorText>
        )}
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
                <IconButton onClick={viewPassHandler} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <ErrorText variant="body">{formik.errors.confirmPassword}</ErrorText>
        )}
        <SignupRoles />
        <FlexContainer>
          <Styles.Button
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}
          >
            <Text variant="sub">Signup</Text>
          </Styles.Button>
        </FlexContainer>
        <FlexContainer>
          <Link href="/login">
            <Text variant="body">Already a member? </Text>
            <UnderlinedText variant="body">Log In.</UnderlinedText>
          </Link>
        </FlexContainer>
      </Styles.FormItemsContainer>
    </Styles.FormContainer>
  );
};

export default SignupField;
