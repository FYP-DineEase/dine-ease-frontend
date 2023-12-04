import React from 'react';
import Image from 'next/image';

// Styles
import { Box, Button } from '@mui/material';
import { FlexContainer, PrimaryButton, Text } from '../UI';

const ListingConfirmation = ({
  activeStep,
  handleBack,
  detailValues,
  locationValues,
  legalValues,
}) => {
  const listingHandler = () => {
    console.log(detailValues, locationValues, legalValues);
  };

  return (
    activeStep === 3 && (
      <React.Fragment>
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
          <PrimaryButton onClick={listingHandler}>
            <Text variant="body">Finish</Text>
          </PrimaryButton>
        </FlexContainer>
      </React.Fragment>
    )
  );
};

export default ListingConfirmation;
