import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import React from 'react';

const ReviewsPage = () => {
  return <div>ReviewsPage</div>;
};

ReviewsPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default ReviewsPage;
