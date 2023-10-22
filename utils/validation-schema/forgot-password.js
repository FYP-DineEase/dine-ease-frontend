import * as yup from "yup";

export const passwordResetSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
      "Password must contain at least one digit and one special character"
    )
    .required("Password is a required field!"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Password do not match")
    .required("Please confirm password!"),
});
