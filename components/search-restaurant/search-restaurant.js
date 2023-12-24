import React from 'react';

// Styles
import { Grid } from '@mui/material';

// Components
import SearchFilters from './search-filters/search-filters';
import ListedRestaurants from './listed-restaurants/listed-restaurants';
import Map from './map/map';

const SearchRestaurant = ({ restaurants }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item sx={{ display: { xs: 'none', md: 'block' } }} xs={3} lg={2}>
        <SearchFilters />
      </Grid>
      <Grid item xs={12} md={9} lg={5}>
        <ListedRestaurants restaurants={restaurants} />
      </Grid>
      <Grid item xs={0} lg={5}>
        <Map />
      </Grid>
    </Grid>
  );
};

export default SearchRestaurant;
