import React, { useState } from 'react';

// Styles
import * as Styles from './menu.styles';
import { ArrowMenu, FlexContainer, Text } from '@/components/UI';
import { Avatar, Badge, Box, Divider, Fade, IconButton, MenuItem } from '@mui/material';

// Icons
import NotificationsIcon from '@mui/icons-material/Notifications';

import userImage from '@/public/assets/images/avatar.jpg';

const notification = [
  {
    image: userImage,
    message: 'Mujtaba upvoted your comment in Kababjees Restaurant',
    date: '12 Dec',
  },
  {
    image: userImage,
    message: 'Mujtaba upvoted your comment in Kababjees Restaurant',
    date: '13 Dec',
  },
  {
    image: userImage,
    message: 'Mujtaba upvoted your comment in Kababjees Restaurant',
    date: '14 Dec',
  },
  {
    image: userImage,
    message: 'Mujtaba upvoted your comment in Kababjees Restaurant',
    date: '15 Dec',
  },
  {
    image: userImage,
    message: 'Mujtaba upvoted your comment in Kababjees Restaurant',
    date: '16 Dec',
  },
  {
    image: userImage,
    message: 'Mujtaba upvoted your comment in Kababjees Restaurant',
    date: '17 Dec',
  },
];

const NotificationMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <IconButton onClick={openMenu}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          sx={{ cursor: 'pointer' }}
          badgeContent={
            <Styles.Badge>
              <Text variant="sub" color="text.primary">
                {notification.length}
              </Text>
            </Styles.Badge>
          }
        >
          <NotificationsIcon color="primary" sx={{ fontSize: '1.75rem' }} />
        </Badge>
      </IconButton>
      <ArrowMenu
        disableScrollLock={true}
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        PaperProps={{
          elevation: 0,
          style: {
            maxHeight: '500px',
            maxWidth: '350px',
          },
        }}
        TransitionComponent={Fade}
      >
        <Box sx={{ textAlign: 'center', mb: 2, mt: 1 }}>
          <Text variant="main" color="text.secondary" fontWeight={500}>
            Notifications
          </Text>
        </Box>
        <Divider variant="middle" orientation="horizontal" sx={{ mb: 1 }} />
        <Box sx={{ height: '425px', overflow: 'auto' }}>
          {notification.map((item, index) => (
            <Box key={index}>
              <MenuItem onClick={closeMenu} sx={{ whiteSpace: 'normal' }}>
                <FlexContainer gap={2}>
                  <Avatar
                    src={item.image.src}
                    alt="notification"
                    sx={{ height: 50, width: 50 }}
                  />
                  <FlexContainer
                    sx={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Text variant="sub" color="text.secondary">
                      {item.message}
                    </Text>
                    <Text variant="sub" color="text.secondary">
                      {item.date}
                    </Text>
                  </FlexContainer>
                </FlexContainer>
              </MenuItem>
              <Divider variant="middle" orientation="horizontal" />
            </Box>
          ))}
        </Box>
      </ArrowMenu>
    </React.Fragment>
  );
};

export default NotificationMenu;
