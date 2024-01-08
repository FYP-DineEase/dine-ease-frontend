import React from 'react';
import { useFormik } from 'formik';

// Styles
import {
  FlexContainer,
  FormContainer,
  InputField,
  PrimaryButton,
  SelectField,
  Text,
} from '@/components/UI';
import { Button, FormControl, InputLabel, MenuItem } from '@mui/material';

// Utils
import { restaurantLocationSchema } from '@/utils/validation-schema/restaurant';

import LegalitiesForm from '../legalities-form/form';

const states = ['Sindh', 'Punjab', 'Balochistan'];
const cities = ['Karachi', 'Lahore', 'Quetta'];
const countries = ['Afghanistan', 'India', 'Pakistan'];

const LocationForm = ({ activeStep, handleNext, handleBack, detailValues }) => {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      address: '',
      state: '',
      city: '',
      country: '',
    },
    validationSchema: restaurantLocationSchema,
  });

  return (
    <React.Fragment>
      {activeStep === 1 && (
        <FormContainer>
          <Text variant="header" textAlign={'center'} fontWeight={800}>
            Where is your business located?
          </Text>
          <Text variant="sub" textAlign={'center'} mb={3}>
            Customers will use this information to find your restaurant.
          </Text>
          <InputField
            name="address"
            label="Restaurant Address"
            variant="outlined"
            placeholder="Enter Restaurant Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.address && Boolean(formik.touched.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <FormControl>
            <InputLabel>State</InputLabel>
            <SelectField
              name="state"
              label="State"
              placeholder="Select State"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {states.map((name) => (
                <MenuItem key={name} value={name}>
                  <Text variant="sub" color="text.secondary" fontWeight={500}>
                    {name}
                  </Text>
                </MenuItem>
              ))}
            </SelectField>
          </FormControl>
          <FormControl>
            <InputLabel>City</InputLabel>
            <SelectField
              name="city"
              label="City"
              placeholder="Select City"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {cities.map((name) => (
                <MenuItem key={name} value={name}>
                  <Text variant="sub" color="text.secondary" fontWeight={500}>
                    {name}
                  </Text>
                </MenuItem>
              ))}
            </SelectField>
          </FormControl>
          <FormControl>
            <InputLabel>Country</InputLabel>
            <SelectField
              name="country"
              label="Country"
              placeholder="Select Country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {countries.map((name) => (
                <MenuItem key={name} value={name}>
                  <Text variant="sub" color="text.secondary" fontWeight={500}>
                    {name}
                  </Text>
                </MenuItem>
              ))}
            </SelectField>
          </FormControl>
          <FlexContainer sx={{ justifyContent: 'space-between', mt: 4 }}>
            <Button variant="outlined" onClick={handleBack}>
              <Text variant="body">Back</Text>
            </Button>
            <PrimaryButton onClick={handleNext} disabled={!formik.isValid}>
              <Text variant="body">Next</Text>
            </PrimaryButton>
          </FlexContainer>
        </FormContainer>
      )}
      <LegalitiesForm
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
        detailValues={detailValues}
        locationValues={formik.values}
      />
    </React.Fragment>
  );
};

export default LocationForm;
