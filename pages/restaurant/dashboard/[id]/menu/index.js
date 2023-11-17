import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import React from 'react'

const MenuPage = () => {
  return (
    <div>MenuPage</div>
  )
}

MenuPage.getLayout = (page) => {
    return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
  };


export default MenuPage