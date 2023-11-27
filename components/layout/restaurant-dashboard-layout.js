import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

//Styles
import { List, ListItem, ListItemIcon } from '@mui/material';
import { DrawerIcon, CustomDrawer, DrawerListText, DrawerListButton } from '../UI';

//Icons
import SummarizeIcon from '@mui/icons-material/Summarize';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import RestaurantLogo from '../restaurant-dashboard/restaurant-logo/restaurant-logo';

const RestaurantDashboardLayout = ({ children }) => {
  const router = useRouter();

  const value = router.asPath.split('/');
  const [selectedPage, setSelectedPage] = useState(value[value.length - 1]);
  const [open, setOpen] = useState(false);

  const dummyId = 1;

  const dashboardLinks = [
    {
      id: 'overview',
      text: 'Overview',
      icon: <SummarizeIcon />,
    },
    {
      id: 'edit-details',
      text: 'Edit Details',
      icon: <EditNoteIcon />,
    },
    {
      id: 'feature-history',
      text: 'Feature History',
      icon: <MonetizationOnIcon />,
    },
    {
      id: 'reviews',
      text: 'Reviews',
      icon: <ReviewsIcon />,
    },
    {
      id: 'menu',
      text: 'Menu',
      icon: <MenuBookIcon />,
    },
    {
      id: 'logs',
      text: 'Logs',
      icon: <WorkHistoryIcon />,
    },
    {
      id: 'badges',
      text: 'Badges',
      icon: <LocalPoliceIcon color="inherit" />,
    },
  ];

  const handleNavDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
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
          {dashboardLinks.map((item, index) => (
            <Link href={`/restaurant/dashboard/${dummyId}/${item.id}`} key={item.id}>
              <ListItem>
                <DrawerListButton
                  selected={selectedPage.includes(item.id)}
                  onClick={() => setSelectedPage(item.id)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <DrawerListText primary={item.text} open={open} />
                </DrawerListButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </CustomDrawer>
      {children}
    </React.Fragment>
  );
};

export default RestaurantDashboardLayout;
