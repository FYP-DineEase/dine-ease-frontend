import * as yup from "yup";

export const signupSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Must be at least 3 characters.")
    .matches(/^[a-zA-Z]+$/, "First name should only contain letters.")
    .required("first name is required."),
  lastName: yup
    .string()
    .min(3, "Must be at least 3 characters.")
    .matches(/^[a-zA-Z]+$/, "Last name should only contain letters.")
    .required("last name is required."),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is a required."),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
      "Password must contain at least one digit and one special character."
    )
    .required("Password is a required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password do not match")
    .required("Please confirm password!"),
  agree: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});
