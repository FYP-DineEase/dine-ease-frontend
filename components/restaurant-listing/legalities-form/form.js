import React, { useState } from 'react';
import { useFormik } from 'formik';

// Styles
import {
  CustomCheckbox,
  FlexContainer,
  FormContainer,
  InputField,
  PrimaryButton,
  Text,
} from '@/components/UI';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

// Utils
import { restaurantLeglitiesSchema } from '@/utils/validation-schema/restaurant';

import ListingConfirmation from '@/components/listing-confirmation/listing-confirmation';

const LegalitiesForm = ({
  activeStep,
  handleNext,
  handleBack,
  detailValues,
  locationValues,
}) => {
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

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      taxId: '',
      taxIdAgreement: false,
    },
    validationSchema: restaurantLeglitiesSchema,
  });

  return (
    <React.Fragment>
      {activeStep === 2 ? (
        <FormContainer>
          <Text variant="header" textAlign={'center'} fontWeight={800}>
            Legal Requirements
          </Text>
          <Text variant="sub" textAlign={'center'} mb={3}>
            Provide the legal requirements in order to verify your business.
          </Text>
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
              sx={{ justifyContent: 'center' }}
              control={
                <CustomCheckbox
                  name="taxIdAgreement"
                  value={formik.values.taxIdAgreement}
                  onChange={formik.handleChange}
                />
              }
              label="I agree that my Tax ID is correct"
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
          detailValues={detailValues}
          locationValues={locationValues}
          legalValues={formik.values}
        />
      )}
    </React.Fragment>
  );
};

export default LegalitiesForm;
