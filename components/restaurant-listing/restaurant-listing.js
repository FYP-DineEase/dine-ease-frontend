import React, { useState } from 'react';
import Image from 'next/image';

// Styles
import { FormDivider, SecondaryContainer, Text } from '../UI';
import { Grid, Step, StepLabel, Stepper } from '@mui/material';

// Stepper
import CustomLabels from './stepper/stepper';
import { CustomStepConnector } from './stepper/stepper.styles';

import DetailsForm from './details-form/form';

const steps = ['Restaurant Details', 'Restaurant Location', 'Restaurant Legalities'];

const RestaurantListing = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <SecondaryContainer container>
      <Grid item xs={12} md={5}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<CustomStepConnector />}
          sx={{ mb: activeStep !== 3 && 8 }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={CustomLabels}>
                <Text variant="body" color="text.ternary">
                  {label}
                </Text>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <DetailsForm
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </Grid>
      {activeStep !== 3 && (
        <React.Fragment>
          <FormDivider />
          <Grid item xs={0} md={6} sx={{ position: 'relative', height: '100%' }}>
            <Image
              src={'/assets/images/food.svg'}
              fill={true}
              sizes="100vw"
              alt="listing-image"
            />
          </Grid>
        </React.Fragment>
      )}
    </SecondaryContainer>
  );
};

export default RestaurantListing;
