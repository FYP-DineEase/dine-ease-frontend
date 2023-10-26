import React, { useState } from "react";

//Formik
import { useFormik } from "formik";

//Validation Schema
import { passwordResetSchema } from "@/utils/validation-schema/forgot-password";

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
} from "@mui/material";

//MUI Global Styled Components
import { BoldText, ErrorText, Text } from "@/components/UI/typography";
import { FlexContainer } from "@/components/UI/container";

//Styled Components
import * as Styles from "../form.styles";

const ResetPasswordField = () => {
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
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: passwordResetSchema,
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
          <BoldText variant="header">Reset Password</BoldText>
        </Styles.FormHeader>
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
                <IconButton onClick={viewPassHandler} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="New Password"
          />
        </FormControl>
        {formik.errors.newPassword && formik.touched.newPassword && (
          <ErrorText variant="body">{formik.errors.newPassword}</ErrorText>
        )}
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
        {formik.errors.confirmNewPassword &&
          formik.touched.confirmNewPassword && (
            <ErrorText variant="body">
              {formik.errors.confirmNewPassword}
            </ErrorText>
          )}
        <FlexContainer>
          <Styles.Button
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}
          >
            <Text variant="sub">Reset</Text>
          </Styles.Button>
        </FlexContainer>
      </Styles.FormItemsContainer>
    </Styles.FormContainer>
  );
};

export default ResetPasswordField;
