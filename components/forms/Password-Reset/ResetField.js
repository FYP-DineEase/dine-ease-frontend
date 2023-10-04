import { useFormik } from "formik";
import React, { useState } from "react";
import {
  FormContainer,
  FormHeader,
  FormItemsContainer,
  FormSnackbar,
  InputField,
  InputFieldContainer,
} from "../form.styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import { Alert, Box, Button, FormControlLabel, FormGroup } from "@mui/material";
import Link from "next/link";
import { loginSchema, passwordResetSchema } from "@/utils/validationSchema";

const ResetField = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    details: "",
    type: "error",
  });

  const handleClose = () => {
    setSnackbar((prevState) => ({ ...prevState, open: false }));
  };

  const [showPassword, setShowPassword] = useState(false);
  const submitHandler = (values, actions) => {
    // dispatch(
    //   authActions.loginHandler({
    //     type: "LOGIN",
    //     email: values.email,
    //     password: values.password,
    //   })
    // );
    formik.setSubmitting(true);
    setSnackbar({
      open: true,
      details: "Halo Im a Snackbar",
      type: "error",
    });
    formik.setSubmitting(false);
  };

  const viewPassHandler = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: passwordResetSchema,
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
      <FormItemsContainer onSubmit={formik.handleSubmit}>
        <Box textAlign="center">
          <LocalDiningIcon sx={{ color: "darkorange", fontSize: "70px" }} />
        </Box>
        <FormHeader>
          <ResponsiveText variant="header">Reset Password</ResponsiveText>
        </FormHeader>
        <Box textAlign="left">
          <ResponsiveText variant="mainBody">New Password</ResponsiveText>
        </Box>
        <InputFieldContainer
          error={
            Boolean(formik.errors.newPassword) && formik.touched.newPassword
              ? 1
              : 0
          }
        >
          <InputField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            id="newPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Enter new Password"
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
          {formik.errors.newPassword && formik.touched.newPassword && (
            <ResponsiveText variant="body" sx={{ color: "red" }}>
              {formik.errors.newPassword}
            </ResponsiveText>
          )}
        </Box>
        <ResponsiveText variant="mainBody">Confirm New Password</ResponsiveText>
        <InputFieldContainer
          error={
            Boolean(formik.errors.confirmNewPassword) &&
            formik.touched.confirmNewPassword
              ? 1
              : 0
          }
        >
          <InputField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmNewPassword}
            id="confirmNewPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Re-Enter Password"
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
          {formik.errors.confirmNewPassword &&
            formik.touched.confirmNewPassword && (
              <ResponsiveText variant="body" sx={{ color: "red" }}>
                {formik.errors.confirmNewPassword}
              </ResponsiveText>
            )}
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
            Reset
          </Button>
        </Box>
      </FormItemsContainer>
    </FormContainer>
  );
};

export default ResetField;
