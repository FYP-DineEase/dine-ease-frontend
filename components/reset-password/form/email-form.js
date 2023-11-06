import React from "react";
import { useFormik } from "formik";

// Snackbar
import { enqueueSnackbar } from "notistack";
import { getError } from "@/helpers/snackbarHelpers";

// Services
import { forgotPassword } from "@/services";

// Utils
import { emailSchema } from "@/utils/validation-schema/forgot-password";

// Styles
import {
  Text,
  InputField,
  FormContainer,
  FormButton,
  PrimaryText,
} from "@/components/UI";

const EmailForm = ({ navigateToLogin }) => {
  const submitHandler = async (value) => {
    try {
      formik.setSubmitting(true);
      const res = await forgotPassword(value.email);
      enqueueSnackbar({
        variant: "info",
        message: res.data,
        onExited: navigateToLogin,
      });
    } catch (e) {
      enqueueSnackbar({ variant: "error", message: getError(e) });
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: submitHandler,
  });

  return (
    <FormContainer component="form" onSubmit={formik.handleSubmit}>
      <Text variant="header" textAlign={"center"} fontWeight={800} mb={3}>
        Find your <PrimaryText variant="header">Account</PrimaryText>
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

      <FormButton type="submit" disabled={formik.isSubmitting}>
        <Text variant="sub">Request Link</Text>
      </FormButton>
    </FormContainer>
  );
};

export default EmailForm;
