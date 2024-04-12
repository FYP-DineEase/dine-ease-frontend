import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectUserState } from '@/store/user/userSlice';
import { NotificationContextProvider } from '@/context/notifications';

// Components
import Logo from '@/components/logo/logo';
import ProfileMenu from '../profile-menu/menu';
import NotificationMenu from '../notification-menu/menu';

// Styles
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FlexContainer, Text } from '@/components/UI';
import { AuthLink } from '../navbar.styles';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

const NavbarDrawer = ({ navLinks }) => {
  const user = useSelector(selectUserState);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleNavDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <FlexContainer gap={1} sx={{ display: { xs: 'block', md: 'none' } }}>
        {user.id && (
          <NotificationContextProvider>
            <NotificationMenu />
            <ProfileMenu />
          </NotificationContextProvider>
        )}
        <IconButton onClick={handleNavDrawer}>
          <MenuIcon color="primary" sx={{ fontSize: 25 }} />
        </IconButton>
      </FlexContainer>
      <Drawer
        sx={{ '& .MuiDrawer-paper': { width: '250px' } }}
        anchor="right"
        open={showDrawer}
        onClose={handleNavDrawer}
      >
        <Box sx={{ mt: 7 }}>
          <Logo />
        </Box>
        <List sx={{ mt: 3 }}>
          {navLinks.map(
            (item) =>
              !item.authItem && (
                <Link key={item.id} href={item.link}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ pl: 5 }}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText sx={{ color: 'text.secondary' }} primary={item.id} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              )
          )}
        </List>
        {!user.id && (
          <React.Fragment>
            <Divider orientation="horizontal" variant="middle" />
            <FlexContainer gap={1} mt={2}>
              {navLinks.map(
                (item) =>
                  item.authItem && (
                    <Link key={item.id} href={item.link}>
                      <AuthLink fill={item.fill ? 1 : 0}>
                        <Text variant="body">{item.id}</Text>
                      </AuthLink>
                    </Link>
                  )
              )}
            </FlexContainer>
          </React.Fragment>
        )}
      </Drawer>
    </React.Fragment>
  );
};

export default NavbarDrawer;
