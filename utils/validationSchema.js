import * as yup from "yup";

export const signupSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("first name is required field!"),
  lastName: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("last name is required field!"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is a required field!"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .required("Password is a required field!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password do not match")
    .required("Please confirm password!"),
  // phoneNumber: yup.string().required("Phone number is a required field!"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is a required field!"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .required("Password is a required field!"),
});
