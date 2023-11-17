import React from 'react';

//Styles
import * as Styles from './restaurant-logo.styles';
import { FlexContainer, Text } from '@/components/UI';
import { Avatar, Divider } from '@mui/material';

const RestaurantLogo = ({ open }) => {
  return (
    <Styles.RestaurantDetails open={open}>
      <Avatar sx={{ height: 100, width: 100 }} />
      <Text variant="subHeader" fontWeight={500}>
        Pizza Hut
      </Text>
      <FlexContainer gap={1}>
        4
        <Text variant="body" color="text.ternary">
          (353 Reviews)
        </Text>
      </FlexContainer>
      <Divider variant="middle" flexItem sx={{ mt: 1, mb: 0.5 }} />
    </Styles.RestaurantDetails>
  );
};

export default RestaurantLogo;
