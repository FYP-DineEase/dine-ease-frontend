import React, { useState } from 'react';
import Link from 'next/link';

// Styles
import * as Styles from './menu.styles';
import { ArrowMenu, Text } from '@/components/UI';
import { Avatar, Badge, Fade, IconButton, MenuItem } from '@mui/material';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProfileMenu = () => {
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
              <KeyboardArrowDownIcon
                fontSize="small"
                sx={{
                  color: 'static.primary',
                  transition: 'all 0.25s',
                  transform: `rotate(${open ? '-180deg' : '0deg'})`,
                }}
              />
            </Styles.Badge>
          }
        >
          <Avatar
            alt="profile-avatar"
            src="/assets/images/avatar.jpg"
            sx={{ height: 55, width: 55 }}
          />
        </Badge>
      </IconButton>
      <ArrowMenu
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        PaperProps={{
          elevation: 0,
        }}
        TransitionComponent={Fade}
      >
        <Link href="/profile/123">
          <MenuItem onClick={closeMenu}>
            <SettingsIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
            <Text variant="sub" color="text.secondary">
              Profile Settings
            </Text>
          </MenuItem>
        </Link>
        <MenuItem onClick={closeMenu}>
          <LogoutIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
          <Text variant="sub" color="text.secondary">
            Logout
          </Text>
        </MenuItem>
      </ArrowMenu>
    </React.Fragment>
  );
};

export default ProfileMenu;
