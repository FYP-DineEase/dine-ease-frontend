import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import React from 'react';

const BadgesPage = () => {
  return <div>Badges</div>;
};

BadgesPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default BadgesPage;
