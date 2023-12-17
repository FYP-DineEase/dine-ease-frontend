import { Grid } from '@mui/material';
import React from 'react';
import SearchFilters from './search-filters/search-filters';

const SearchRestaurant = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <SearchFilters />
      </Grid>
      <Grid item xs={4}>
        Restaurants
      </Grid>
      <Grid item xs={6}>
        Map
      </Grid>
    </Grid>
  );
};

export default SearchRestaurant;
