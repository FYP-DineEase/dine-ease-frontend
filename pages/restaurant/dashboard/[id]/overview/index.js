import React from 'react';

import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import Overview from '@/components/restaurant-dashboard/overview/overview';

const OverviewPage = () => {
  return <Overview />;
};

OverviewPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default OverviewPage;
