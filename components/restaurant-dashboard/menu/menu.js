import React from 'react';

//Styles
import { Grid } from '@mui/material';
import { DashboardContainer } from '@/components/UI';

import MenuItems from './menu-items/menu-items';

const Menu = () => {
  return (
    <DashboardContainer container columnSpacing={2} rowGap={1}>
      <Grid item xs={12}>
        <MenuItems />
      </Grid>
    </DashboardContainer>
  );
};

export default Menu;
