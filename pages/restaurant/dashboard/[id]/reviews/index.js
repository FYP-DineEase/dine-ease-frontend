import React from 'react';
import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import Reviews from '@/components/restaurant-dashboard/reviews/reviews';

const ReviewsPage = () => {
  return <Reviews />;
};

ReviewsPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default ReviewsPage;
