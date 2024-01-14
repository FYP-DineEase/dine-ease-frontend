import React, { useState } from 'react';
import { useFormik } from 'formik';

// Styles
import {
  CustomCheckbox,
  FormContainer,
  InputField,
  PrimaryButton,
  Text,
} from '@/components/UI';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

// Utils
import { restaurantDetailsSchema } from '@/utils/validation-schema/restaurant';

import LocationForm from '../location-form/form';

const LegalitiesForm = ({ activeStep, handleNext, handleBack }) => {
  const [legalities, setLegalities] = useState({ fbr: true, stock: true });

  const fbrHandler = (event) => {
    setLegalities((prevState) => ({
      ...prevState,
      fbr: event.target.value,
    }));
  };

  const stockHandler = (event) => {
    setLegalities((prevState) => ({
      ...prevState,
      stock: event.target.value,
    }));
  };

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      // const {} = values;
      // await checkRestaurant(values)
      handleNext();
    } catch (e) {
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      name: '',
      taxId: '',
      taxIdAgreement: false,
    },
    validationSchema: restaurantDetailsSchema,
    onSubmit: submitHandler,
  });

  return (
    <React.Fragment>
      {activeStep === 0 && (
        <FormContainer component="form" onSubmit={formik.handleSubmit}>
          <Text variant="header" textAlign={'center'} fontWeight={800}>
            Legal Requirements
          </Text>
          <Text variant="sub" textAlign={'center'} mb={3}>
            Provide the legal requirements in order to verify your business.
          </Text>
          <InputField
            name="name"
            label="Restaurant Name"
            variant="outlined"
            placeholder="Enter Restaurant Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.name && Boolean(formik.touched.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <InputField
            name="taxId"
            label="Restaurant Tax ID"
            variant="outlined"
            placeholder="Enter Restaurant Tax ID"
            value={formik.values.taxId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.taxId && Boolean(formik.touched.taxId)}
            helperText={formik.touched.taxId && formik.errors.taxId}
          />
          <FormControl>
            <FormLabel>Is your restaurant registered with FBR?</FormLabel>
            <RadioGroup row value={legalities.fbr} onChange={fbrHandler}>
              <FormControlLabel value={true} control={<Radio />} label="Yes" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Is your restaurant part of stock exchange?</FormLabel>
            <RadioGroup row value={legalities.stock} onChange={stockHandler}>
              <FormControlLabel value={true} control={<Radio />} label="Yes" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <CustomCheckbox
                  name="taxIdAgreement"
                  value={formik.values.taxIdAgreement}
                  checked={formik.values.taxIdAgreement}
                  onChange={formik.handleChange}
                />
              }
              label="I agree that my Tax ID is correct"
            />
          </FormGroup>

          <PrimaryButton
            type="submit"
            disabled={!formik.isValid}
            sx={{ ml: 'auto', mt: 4 }}
          >
            <Text variant="body">Next</Text>
          </PrimaryButton>
        </FormContainer>
      )}
      <LocationForm
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
        detailValues={formik.values}
      />
    </React.Fragment>
  );
};

export default LegalitiesForm;
