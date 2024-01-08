import React from 'react';
import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import RestaurantImages from '@/components/restaurant-dashboard/restaurant-images/restaurant-images';

const RestaurantImagesPage = () => {
  return <RestaurantImages />;
};

RestaurantImagesPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default RestaurantImagesPage;
