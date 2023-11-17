import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import React from 'react';

const FeatureHistory = () => {
  return <div>FeatureHistory</div>;
};

FeatureHistory.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default FeatureHistory;
