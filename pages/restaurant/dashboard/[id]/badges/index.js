import React from 'react';
import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';

const BadgesPage = () => {
  return <div>Badges</div>;
};

BadgesPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default BadgesPage;
