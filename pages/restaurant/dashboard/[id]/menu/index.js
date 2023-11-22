import React from 'react';

import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import Menu from '@/components/restaurant-dashboard/menu/menu';

const MenuPage = () => {
  return <Menu />;
};

MenuPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default MenuPage;
