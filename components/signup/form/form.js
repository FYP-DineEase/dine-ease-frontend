import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";

// Snackbar
import { enqueueSnackbar } from "notistack";
import { getError } from "@/helpers/snackbarHelpers";

// Services
import { signup } from "@/services";

// Utils
import { UserRoles } from "@/utils/roles";
import { signupSchema } from "@/utils/validation-schema/signup";

// Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Styles
import {
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  Text,
  InputField,
  PrimaryText,
  CustomCheckbox,
  FlexContainer,
  FormButton,
  FormContainer,
} from "@/components/UI";
import * as Styles from "./form.styles";
import { useRouter } from "next/router";

const SignupForm = () => {
  const router = useRouter();

  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("User");

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      const { confirmPassword, ...data } = values;
      const res = await signup({ ...data, role });
      enqueueSnackbar({
        variant: "success",
        message: res.data,
        onExited: () =>
          router.push(`/confirmation?email=${data.email}`, null, { shallow: true }),
      });
    } catch (e) {
      enqueueSnackbar({ variant: "error", message: getError(e) });
    } finally {
      formik.setSubmitting(false);
    }
  };

  const agreeChangeHandler = (event) => {
    setAgree(event.target.checked);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "Ahmed",
      lastName: "Kamran",
      email: "gobes29957@zamaneta.com",
      password: "Ahmed@123",
      confirmPassword: "Ahmed@123",
    },
    validationSchema: signupSchema,
    onSubmit: submitHandler,
  });

  return (
    <FormContainer component="form" onSubmit={formik.handleSubmit}>
      <Text variant="header" textAlign={"center"} fontWeight={800}>
        Welcome to DineEase
      </Text>
      <Text variant="main" textAlign={"center"} fontWeight={500} mb={3}>
        Create your account
      </Text>

      <FlexContainer gap={2}>
        <Box>
          <InputField
            name="firstName"
            label="First Name"
            variant="outlined"
            placeholder="Enter First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.firstName && Boolean(formik.touched.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Box>

        <Box>
          <InputField
            name="lastName"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.lastName && Boolean(formik.touched.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Box>
      </FlexContainer>

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

      <InputField
        name="password"
        label="Password"
        variant="outlined"
        placeholder="Enter Password"
        type={showPassword ? "text" : "password"}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password && Boolean(formik.touched.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <InputField
        name="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        placeholder="Confirm Password"
        type={showPassword ? "text" : "password"}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.confirmPassword && Boolean(formik.touched.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <FlexContainer gap={2}>
        {Object.values(UserRoles).map((item) => (
          <Styles.RoleItem
            key={item.value}
            selected={+role.includes(item.value)}
            onClick={() => setRole(item.value)}>
            {item.icon}
            <Text variant="sub">{item.value}</Text>
          </Styles.RoleItem>
        ))}
      </FlexContainer>

      <FormGroup>
        <FormControlLabel
          control={<CustomCheckbox checked={agree} onChange={agreeChangeHandler} />}
          label="I agree to DineEase's Terms & Conditions"
        />
      </FormGroup>

      <FormButton type="submit" disabled={formik.isSubmitting}>
        <Text variant="sub">Sign up</Text>
      </FormButton>

      <Link href="/login" style={{ textAlign: "center" }}>
        <Text>Already have an account? </Text>
        <PrimaryText>Login now.</PrimaryText>
      </Link>
    </FormContainer>
  );
};

export default SignupForm;
