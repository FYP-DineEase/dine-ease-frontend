import React from 'react';
import { useFormik } from 'formik';

// Styles
import {
  CustomCheckbox,
  FlexContainer,
  FormContainer,
  InputField,
  PrimaryButton,
  SelectField,
  Text,
} from '@/components/UI';
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
} from '@mui/material';

// Utils
import { restaurantDetailsSchema } from '@/utils/validation-schema/restaurant-listing/restaurant-details';
import { PhoneInputCustom } from '@/utils/phone-input';

import LocationForm from '../location-form/form';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const DetailsForm = ({ activeStep, handleNext, handleBack }) => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      name: '',
      cuisine: [],
      contactNumber: '',
      contactAgreement: false,
    },
    validationSchema: restaurantDetailsSchema,
  });

  const contactChangeHandler = (contactNumber) => {
    formik.setFieldValue('contactNumber', contactNumber);
  };

  return (
    <React.Fragment>
      {activeStep === 0 && (
        <FormContainer component="form">
          <Text variant="header" textAlign={'center'} fontWeight={800}>
            Tell us about your Restaurant
          </Text>
          <Text variant="sub" textAlign={'center'} mb={3}>
            This information will be shown on the page so that customers can search and
            contact you.
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
          <FormControl error={formik.errors.cuisine && Boolean(formik.touched.cuisine)}>
            <InputLabel>Cuisine</InputLabel>
            <SelectField
              name="cuisine"
              multiple
              label="cuisine"
              value={formik.values.cuisine}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      color="primary"
                      sx={{ color: 'text.primary' }}
                    />
                  ))}
                </Box>
              )}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Text variant="sub" color="text.secondary" fontWeight={500}>
                    {name}
                  </Text>
                </MenuItem>
              ))}
            </SelectField>
            {formik.touched.cuisine && formik.errors.cuisine && (
              <Text variant="sub" color="error">
                {formik.errors.cuisine}
              </Text>
            )}
          </FormControl>
          <InputField
            name="contactNumber"
            variant="outlined"
            onChange={contactChangeHandler}
            onBlur={formik.handleBlur}
            value={formik.values.contactNumber}
            error={formik.errors.contactNumber && Boolean(formik.touched.contactNumber)}
            helperText={formik.touched.contactNumber && formik.errors.contactNumber}
            InputProps={{
              inputComponent: PhoneInputCustom,
            }}
          />
          <FormGroup>
            <FormControlLabel
              sx={{ justifyContent: 'center' }}
              control={
                <CustomCheckbox
                  name="contactAgreement"
                  value={formik.values.contactAgreement}
                  onChange={formik.handleChange}
                />
              }
              label="I agree that my phone is correct"
            />
          </FormGroup>
          <FlexContainer sx={{ justifyContent: 'space-between', mt: 4 }}>
            <Button variant="outlined" onClick={handleBack} disabled={true}>
              <Text variant="body">Back</Text>
            </Button>
            <PrimaryButton onClick={handleNext} disabled={!formik.isValid}>
              <Text variant="body">Next</Text>
            </PrimaryButton>
          </FlexContainer>
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

export default DetailsForm;
