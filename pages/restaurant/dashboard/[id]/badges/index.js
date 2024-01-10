import React from 'react';
import RestaurantDashboardLayout from '@/components/layout/restaurant-dashboard-layout';
import withAuth from '@/components/auth/with-auth';
import { UserRoles } from '@/utils/roles';

const BadgesPage = () => {
  return <div>Badges</div>;
};

BadgesPage.getLayout = (page) => {
  return <RestaurantDashboardLayout>{page}</RestaurantDashboardLayout>;
};

export default withAuth(BadgesPage, { roles: [UserRoles.MANAGER] });
