import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import React from 'react';

const LogsPage = () => {
  return <div>LogsPage</div>;
};

LogsPage.getLayout = (page) => {
    return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
  };

export default LogsPage;
