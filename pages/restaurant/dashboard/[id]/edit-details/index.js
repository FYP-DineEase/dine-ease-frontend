import React from 'react';
import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import EditDetails from '@/components/restaurant-dashboard/edit-details/edit-details';

const EditDetailsPage = () => {
  return <EditDetails />;
};

EditDetailsPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default EditDetailsPage;
