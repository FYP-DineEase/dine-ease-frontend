import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import Overview from '@/components/restaurant-dashboard/overview/overview';
import React from 'react';

const OverviewPage = () => {
  return <Overview />;
};

OverviewPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default OverviewPage;
