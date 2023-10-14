import React, { useState } from "react";

import { useFormik } from "formik";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";

import {
  FormContainer,
  FormHeader,
  FormItemsContainer,
  FormSnackbar,
  InputField,
  InputFieldContainer,
} from "../form.styles";

import { passwordResetSchema } from "@/utils/validationSchema";

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
      <FormItemsContainer component="form" onSubmit={formik.handleSubmit}>
        <Box textAlign="center">
          <LocalDiningIcon sx={{ color: "darkorange", fontSize: "70px" }} />
        </Box>
        <FormHeader>
          <ResponsiveText variant="header">Reset Password</ResponsiveText>
        </FormHeader>
        <FormControl variant="outlined">
          <InputLabel
            htmlFor="newPassword"
            error={formik.errors.newPassword && formik.touched.newPassword}
            color="warning"
          >
            New Password
          </InputLabel>
          <OutlinedInput
            error={formik.errors.newPassword && formik.touched.newPassword}
            id="newPassword"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
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
            label="New Password"
          />
        </FormControl>
        <Box>
          {formik.errors.newPassword && formik.touched.newPassword && (
            <ResponsiveText variant="body" sx={{ color: "red" }}>
              {formik.errors.newPassword}
            </ResponsiveText>
          )}
        </Box>
        <FormControl variant="outlined">
          <InputLabel
            htmlFor="confirmNewPassword"
            error={
              formik.errors.confirmNewPassword &&
              formik.touched.confirmNewPassword
            }
            color="warning"
          >
            Confirm New Password
          </InputLabel>
          <OutlinedInput
            error={
              formik.errors.confirmNewPassword &&
              formik.touched.confirmNewPassword
            }
            id="confirmNewPassword"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmNewPassword}
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
            label="Confirm New Password"
          />
        </FormControl>
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
