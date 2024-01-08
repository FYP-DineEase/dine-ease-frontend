import React from 'react';
import Image from 'next/image';

// Styles
import { Box, Button } from '@mui/material';
import { FlexContainer, PrimaryButton, Text } from '../UI';
import { useFormik } from 'formik';

// Snackbar
import { enqueueSnackbar } from 'notistack';

const ListingConfirmation = ({
  activeStep,
  handleBack,
  detailValues,
  locationValues,
  legalValues,
}) => {
  const submitHandler = async () => {
    try {
      formik.setSubmitting(true);
      console.log(detailValues, locationValues, legalValues);
      enqueueSnackbar({
        variant: 'success',
        message: 'Restaurant Listed',
        // onExited: () => router.push(`/confirmation?email=${data.email}`, null, { shallow: true }),
      });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: 'error' });
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: submitHandler,
  });

  return (
    activeStep === 3 && (
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Box sx={{ position: 'relative', height: { xs: '250px', md: '500px' } }}>
          <Image src={'/assets/images/food.svg'} alt="login-image" fill sizes="100vw" />
        </Box>
        <Box textAlign="center">
          <Text variant="header" fontWeight={500}>
            Restaurant Listing Almost Completed!
          </Text>
        </Box>
        <Box textAlign="center" mt={2}>
          <Text variant="main">
            Select Finish to successfully register your restaurant.
          </Text>
        </Box>
        <FlexContainer sx={{ justifyContent: 'space-around', mt: 4 }}>
          <Button variant="outlined" onClick={handleBack}>
            <Text variant="body">Back</Text>
          </Button>
          <PrimaryButton type="submit" disabled={formik.isSubmitting}>
            <Text variant="body">Finish</Text>
          </PrimaryButton>
        </FlexContainer>
      </Box>
    )
  );
};

export default ListingConfirmation;
