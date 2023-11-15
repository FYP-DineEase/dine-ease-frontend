import { Box, Drawer } from '@mui/material';
import React from 'react';
import { CustomDrawer } from '../UI';

const RestaurantDashboardLayout = ({ children }) => {
  return (
    <>
      <CustomDrawer>halo</CustomDrawer>
      {children}
    </>
  );
};

export default RestaurantDashboardLayout;
