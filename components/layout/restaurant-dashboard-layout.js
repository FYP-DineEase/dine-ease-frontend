import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import withAuth from '../auth/with-auth';
import { RestaurantProvider } from '@/context/restaurant-context';

// Styles
import { List, ListItem, ListItemIcon } from '@mui/material';
import {
  DrawerIcon,
  CustomDrawer,
  DrawerListText,
  DrawerListButton,
  DrawerListItem,
} from '../UI';

// Icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import RestaurantLogo from '../restaurant-dashboard/restaurant-logo/restaurant-logo';

// Utils
import { dashboardLinks } from '@/utils/constants';
import { UserRoles } from '@/utils/roles';

const RestaurantDashboardLayout = ({ children }) => {
  const router = useRouter();
  const slug = router.query.id;
  const value = router.asPath.split('/');

  const [selectedPage, setSelectedPage] = useState(value[value.length - 1]);
  const [open, setOpen] = useState(false);

  const handleNavDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <RestaurantProvider>
      <CustomDrawer variant="permanent" open={open} onClose={handleNavDrawer}>
        <DrawerIcon onClick={handleNavDrawer} open={open}>
          {open ? (
            <KeyboardArrowLeftIcon color="primary" fontSize="large" />
          ) : (
            <KeyboardArrowRightIcon color="primary" fontSize="large" />
          )}
        </DrawerIcon>
        <RestaurantLogo open={open} />
        <List>
          {dashboardLinks.map((item) => (
            <Link href={`/restaurant/dashboard/${slug}/${item.id}`} key={item.id}>
              <DrawerListItem>
                <DrawerListButton
                  selected={selectedPage.includes(item.id)}
                  onClick={() => setSelectedPage(item.id)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <DrawerListText primary={item.text} open={open} />
                </DrawerListButton>
              </DrawerListItem>
            </Link>
          ))}
        </List>
        <List sx={{ mt: 'auto', mb: 5 }}>
          <Link href={`/`}>
            <ListItem>
              <DrawerListButton>
                <ListItemIcon>
                  <KeyboardArrowLeftIcon />
                </ListItemIcon>
                <DrawerListText primary={'Go Back'} open={open} />
              </DrawerListButton>
            </ListItem>
          </Link>
        </List>
      </CustomDrawer>
      {children}
    </RestaurantProvider>
  );
};

export default withAuth(RestaurantDashboardLayout, { roles: [UserRoles.MANAGER] });
