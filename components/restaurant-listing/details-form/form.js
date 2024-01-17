import React from 'react';
import { useFormik } from 'formik';

// Components
import ListingConfirmation from '@/components/restaurant-listing/listing-confirmation/listing-confirmation';

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
  IconButton,
  InputLabel,
  MenuItem,
} from '@mui/material';

// Icons
import CancelIcon from '@mui/icons-material/Cancel';

// Utils
import { restaurantLeglitiesSchema } from '@/utils/validation-schema/restaurant';
import { PhoneInputCustom } from '@/utils/phone-input';
import { cuisineTypes } from '@/utils/constants';

const DetailsForm = ({
  activeStep,
  handleNext,
  handleBack,
  legalValues,
  locationValues,
}) => {
  const contactChangeHandler = (phoneNumber) => {
    formik.setFieldValue('phoneNumber', phoneNumber);
  };

  const handleDelete = (index) => {
    const updatedCuisine = [...formik.values.cuisine];
    updatedCuisine.splice(index, 1);
    formik.setFieldValue('cuisine', updatedCuisine);
  };
  

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      cuisine: [],
      phoneNumber: '',
      contactAgreement: false,
    },
    validationSchema: restaurantLeglitiesSchema,
  });

  return (
    <React.Fragment>
      {activeStep === 2 ? (
        <FormContainer>
          <Text variant="header" textAlign={'center'} fontWeight={800}>
            Tell us about your Restaurant
          </Text>
          <Text variant="sub" textAlign={'center'} mb={3}>
            This information will be shown on the page so that customers can search and
            contact you.
          </Text>
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
                  {selected.map((value, index) => (
                    <Chip
                      key={value}
                      label={value}
                      color="primary"
                      deleteIcon={
                        <IconButton>
                          <CancelIcon
                            sx={{ color: 'white' }}
                            onMouseDown={(event) => event.stopPropagation()}
                          />
                        </IconButton>
                      }
                      onDelete={() => handleDelete(index)}
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
          <FormGroup>
            <FormControlLabel
              control={
                <CustomCheckbox
                  name="contactAgreement"
                  value={formik.values.contactAgreement}
                  checked={formik.values.contactAgreement}
                  onChange={formik.handleChange}
                />
              }
              label="I agree that my phone is correct"
            />
          </FormGroup>
          <FlexContainer sx={{ justifyContent: 'space-between', mt: 4 }}>
            <Button variant="outlined" onClick={handleBack}>
              <Text variant="body">Back</Text>
            </Button>
            <PrimaryButton onClick={handleNext} disabled={!formik.isValid}>
              <Text variant="body">Next</Text>
            </PrimaryButton>
          </FlexContainer>
        </FormContainer>
      ) : (
        <ListingConfirmation
          activeStep={activeStep}
          handleBack={handleBack}
          legalValues={legalValues}
          locationValues={locationValues}
          detailValues={formik.values}
        />
      )}
    </React.Fragment>
  );
};

export default DetailsForm;
