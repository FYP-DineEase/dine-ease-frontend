import React, { useState } from 'react';
import Link from 'next/link';

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
  const [selectedPage, setSelectedPage] = useState(0);
  const [open, setOpen] = useState(false);

  const id = 1;

  const dashboardLinks = [
    {
      id: 'Overview',
      link: `/restaurant/dashboard/${id}/overview`,
      icon: <SummarizeIcon />,
    },
    {
      id: 'Edit Details',
      link: `/restaurant/dashboard/${id}/edit-details`,
      icon: <EditNoteIcon />,
    },
    {
      id: 'Feature History',
      link: `/restaurant/dashboard/${id}/feature-history`,
      icon: <MonetizationOnIcon />,
    },
    {
      id: 'Reviews',
      link: `/restaurant/dashboard/${id}/reviews`,
      icon: <ReviewsIcon />,
    },
    {
      id: 'Menu',
      link: `/restaurant/dashboard/${id}/menu`,
      icon: <MenuBookIcon />,
    },
    {
      id: 'Logs',
      link: `/restaurant/dashboard/${id}/logs`,
      icon: <WorkHistoryIcon />,
    },
    {
      id: 'Badges',
      link: `/restaurant/dashboard/${id}/badges`,
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
            <Link href={item.link} key={item.id}>
              <ListItem>
                <DrawerListButton
                  selected={selectedPage === index}
                  onClick={() => setSelectedPage(index)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <DrawerListText primary={item.id} open={open} />
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
