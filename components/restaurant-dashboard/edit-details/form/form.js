import React from 'react';
import { useFormik } from 'formik';

// Styles
import {
  DashboardContent,
  FormButton,
  FormContainer,
  InputField,
  SelectField,
  Text,
} from '@/components/UI';
import {
  Alert,
  AlertTitle,
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material';

// Utils
import { restaurantEditDetailsSchema } from '@/utils/validation-schema/restaurant-edit-details/restaurant-edit-details';
import { PhoneInputCustom } from '@/utils/phone-input';
import { enqueueSnackbar } from 'notistack';

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
const states = ['Sindh', 'Punjab', 'Balochistan'];
const cities = ['Karachi', 'Lahore', 'Quetta'];
const countries = ['Afghanistan', 'India', 'Pakistan'];

const EditDetailsForm = () => {
  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      console.log(values);
      enqueueSnackbar({
        variant: 'success',
        message: 'Restaurant Details Updated',
      });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: 'error' });
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      cuisine: [],
      contactNumber: '',
      contactAgreement: true,
      address: '',
      state: '',
      city: '',
      country: '',
      taxId: '',
      taxIdAgreement: true,
    },
    validationSchema: restaurantEditDetailsSchema,
    onSubmit: submitHandler,
  });

  const contactChangeHandler = (contactNumber) => {
    formik.setFieldValue('contactNumber', contactNumber);
  };

  return (
    <DashboardContent>
      <Alert severity="warning" sx={{ mb: 3 }}>
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
      </Alert>
      <FormContainer
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ margin: 'none' }}
      >
        <Text variant="header" textAlign={'center'} fontWeight={500}>
          Update Restaurant Details
        </Text>
        <Text variant="sub" textAlign={'center'} mb={3}>
          Following information will be shown on the page so that customers can search and
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
        <FormButton type="submit" disabled={formik.isSubmitting}>
          <Text variant="sub">Update Details</Text>
        </FormButton>
      </FormContainer>
    </DashboardContent>
  );
};

export default EditDetailsForm;
