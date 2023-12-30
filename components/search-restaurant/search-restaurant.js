import React from 'react';

// Styles
import { Grid } from '@mui/material';

// Components
import ListedRestaurants from './listed-restaurants/listed-restaurants';
import Map from './map/map';

const SearchRestaurant = ({ restaurants }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={7}>
        <ListedRestaurants restaurants={restaurants} />
      </Grid>
      <Grid item xs={0} lg={5}>
        <Map />
      </Grid>
    </Grid>
  );
};

export default SearchRestaurant;
