import React, { useState, useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { useRestaurantContext } from '@/context/restaurant-context';

import Location from '../location/location';

// Styles
import * as Styles from './form.styles';
import {
  DashboardContent,
  FormButton,
  FormContainer,
  InputField,
  SelectField,
  Text,
} from '@/components/UI';
import {
  AlertTitle,
  Box,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
} from '@mui/material';

// Services
import { updateRestaurantDetails } from '@/services';

// Helpers
import { fetchCountry } from '@/helpers/mapHelpers';
import { getError } from '@/helpers/snackbarHelpers';

// Utils
import { restaurantEditSchema } from '@/utils/validation-schema/restaurant';
import { PhoneInputCustom } from '@/utils/phone-input';
import { cuisineTypes } from '@/utils/constants';

const EditDetailsForm = () => {
  const { details, detailsHandler } = useRestaurantContext();
  const [location, setLocation] = useState({
    coordinates: [null, null],
    country: '',
  });

  useEffect(() => {
    if (details.location) {
      setLocation(details.location);
    }
  }, [details.location]);

  const initialValues = useMemo(() => {
    const [city, state, country] = (location.country ?? '').split(', ');

    return {
      taxId: details.taxId || '',
      name: details.name || '',
      cuisine: details.cuisine || '',
      phoneNumber: details.phoneNumber || '',
      address: details.address || '',
      city: city || '',
      state: state || '',
      country: country || '',
    };
  }, [details, location]);

  const updateLocation = async (data) => {
    const loc = await fetchCountry(data[0], data[1]);
    setLocation(loc);
  };

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      
      const { city, state, country, ...payload } = values;
      payload.location = location;
      
      await updateRestaurantDetails(details.id, payload);
      detailsHandler(payload);

      enqueueSnackbar({
        variant: 'success',
        message: 'Restaurant Details Updated',
      });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: restaurantEditSchema,
    enableReinitialize: true,
    onSubmit: submitHandler,
  });

  const contactChangeHandler = (phoneNumber) => {
    formik.setFieldValue('phoneNumber', phoneNumber);
  };

  return (
    <DashboardContent>
      <Styles.StyledAlert severity="warning">
        <AlertTitle>
          <Text variant="body" fontWeight={800}>
            Warning
          </Text>
        </AlertTitle>
        <Text variant="body" fontWeight={500}>
          Updating
          <Text variant="body" fontWeight={800} mr={1} ml={1}>
            Restaurant Name / Tax ID
          </Text>
          will cause restaurant to be re-listed after approval by admin
        </Text>
      </Styles.StyledAlert>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} lg={5}>
          <FormContainer component="form" onSubmit={formik.handleSubmit}>
            <Text variant="subHeader" textAlign={'center'} fontWeight={500}>
              Update Restaurant Details
            </Text>
            <Text variant="sub" textAlign={'center'} mb={3}>
              Following information will be shown on the page so that customers can search
              and contact you.
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
                {cuisineTypes.map((cuisine) => (
                  <MenuItem key={cuisine} value={cuisine}>
                    <Text variant="sub" color="text.secondary" fontWeight={500}>
                      {cuisine}
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
              name="phoneNumber"
              variant="outlined"
              onChange={contactChangeHandler}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              error={formik.errors.phoneNumber && Boolean(formik.touched.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              InputProps={{
                inputComponent: PhoneInputCustom,
              }}
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
            <InputField
              name="city"
              label="City"
              variant="outlined"
              placeholder="Enter City"
              value={formik.values.city}
              disabled
            />
            <InputField
              name="state"
              label="State"
              variant="outlined"
              placeholder="Enter State"
              value={formik.values.state}
              disabled
            />
            <InputField
              name="country"
              label="Country"
              variant="outlined"
              placeholder="Enter Country"
              value={formik.values.country}
              disabled
            />
            <FormButton type="submit" disabled={formik.isSubmitting}>
              <Text variant="sub">Update Details</Text>
            </FormButton>
          </FormContainer>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          variant="middle"
          sx={{ display: { xs: 'none', lg: 'block' } }}
        />
        <Grid item xs={0} lg={6} sx={{ position: 'relative', height: '700px' }}>
          <Location location={location} updateLocation={updateLocation} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
};

export default EditDetailsForm;
