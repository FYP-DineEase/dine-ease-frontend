import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import React from 'react'

const EditDetailsPage = () => {
  return (
    <div>EditDetailsPage</div>
  )
}

EditDetailsPage.getLayout = (page) => {
    return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
  };

export default EditDetailsPage