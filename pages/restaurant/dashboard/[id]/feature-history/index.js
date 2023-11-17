import React from 'react';

import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import FeatureHistory from '@/components/restaurant-dashboard/feature-history/feature-history';

const FeatureHistoryPage = () => {
  return <FeatureHistory />;
};

FeatureHistoryPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default FeatureHistoryPage;
