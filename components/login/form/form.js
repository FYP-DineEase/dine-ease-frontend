import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ResendModal from '../resend-verification/modal';

// Services
import { login } from '@/services';

// Form
import { useFormik } from 'formik';
import { loginSchema } from '@/utils/validation-schema/login';

// Snackbar
import { enqueueSnackbar } from 'notistack';
import { getError } from '@/helpers/snackbarHelpers';

// Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Styles
import {
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
} from '@mui/material';
import {
  Text,
  FormButton,
  InputField,
  FlexContainer,
  FormContainer,
  CustomCheckbox,
} from '@/components/UI';

const LoginForm = () => {
  const router = useRouter();

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const rememberChangeHandler = (event) => {
    setRemember(event.target.checked);
  };

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      const res = await login(values);
      console.log(res.data);
      router.push('/', null, { shallow: true });
    } catch (e) {
      console.log(e);
      if (e.request?.status === 403) {
        handleShowModal();
      } else {
        enqueueSnackbar({ variant: 'error', message: getError(e) });
      }
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: submitHandler,
  });

  return (
    <React.Fragment>
      <ResendModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        email={formik.values.email}
      />
      <FormContainer component="form" onSubmit={formik.handleSubmit}>
        <Text variant="header" textAlign={'center'} fontWeight={800}>
          Welcome to&nbsp;
          <Text variant="header" color="primary">
            DineEase
          </Text>
        </Text>
        <Text variant="main" textAlign={'center'} fontWeight={500} mb={3}>
          Login to your account
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

        <InputField
          name="password"
          label="Password"
          variant="outlined"
          placeholder="Enter Password"
          type={showPassword ? 'text' : 'password'}
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

        <FlexContainer sx={{ justifyContent: 'space-between' }}>
          <FormGroup>
            <FormControlLabel
              control={
                <CustomCheckbox checked={remember} onChange={rememberChangeHandler} />
              }
              label="Remember me"
            />
          </FormGroup>
          <Link href="/reset-password">
            <Text variant="body">Forgot Password?</Text>
          </Link>
        </FlexContainer>

        <FormButton type="submit" disabled={formik.isSubmitting} color="primary">
          <Text variant="sub">Login</Text>
        </FormButton>

        <Link href="/signup">
          <Box sx={{ textAlign: 'center' }}>
            <Text variant="body">Not a member? </Text>
            <Text variant="body" color="primary">
              Signup now.
            </Text>
          </Box>
        </Link>
      </FormContainer>
    </React.Fragment>
  );
};

export default LoginForm;
