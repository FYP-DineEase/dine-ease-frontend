import React from 'react';

//Styles
import { DashboardContainer } from '@/components/UI';
import { Grid } from '@mui/material';

import FeatureTable from './feature-table/feature-table';

const FeatureHistory = () => {
  return (
    <DashboardContainer container columnSpacing={2} rowGap={1}>
      <Grid item xs={12}>
        <div>halo</div>
      </Grid>
      <Grid item xs={12}>
        <FeatureTable />
      </Grid>
    </DashboardContainer>
  );
};

export default FeatureHistory;
