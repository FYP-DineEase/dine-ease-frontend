import React from 'react';
import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import Logs from '@/components/restaurant-dashboard/logs/logs';

const LogsPage = () => {
  return <Logs />;
};

LogsPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default LogsPage;
