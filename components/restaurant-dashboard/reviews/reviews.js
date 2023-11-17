import React from 'react';

//Styles
import { DashboardContainer } from '@/components/UI';
import { Grid } from '@mui/material';

import ReviewsTable from './reviews-table/reviews-table';

const Reviews = () => {
  return (
    <DashboardContainer container columnSpacing={2} rowGap={1}>
      <Grid item xs={12}>
        <div>halo</div>
      </Grid>
      <Grid item xs={12}>
        <ReviewsTable />
      </Grid>
    </DashboardContainer>
  );
};

export default Reviews;
