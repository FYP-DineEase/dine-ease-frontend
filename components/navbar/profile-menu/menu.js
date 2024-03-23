import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState, userActions } from '@/store/user/userSlice';

// Styles
import * as Styles from './menu.styles';
import { ArrowMenu, Text } from '@/components/UI';
import { Avatar, Badge, Box, Fade, IconButton, MenuItem } from '@mui/material';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MapIcon from '@mui/icons-material/Map';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Helpers
import { getFileUrl } from '@/helpers/fileHelpers';
import { UserRoles } from '@/utils/roles';

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUserState);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const profileLinks = [
    {
      value: 'Profile',
      icon: <SettingsIcon color="primary" fontSize="small" />,
      handler: () => router.push(`/profile/${user.slug}`),
    },
    {
      value: 'List Restaurant',
      icon: <RestaurantIcon color="primary" fontSize="small" />,
      hide: user.role !== UserRoles.MANAGER,
      handler: () => router.push('/restaurant/listing'),
    },
    {
      value: 'Favourites Map',
      icon: <MapIcon color="primary" fontSize="small" />,
      hide: !user.mapSlug,
      handler: () => router.push(`/map/${user.mapSlug}`),
    },
    {
      value: 'Logout',
      icon: <LogoutIcon color="primary" fontSize="small" />,
      handler: () => {
        dispatch(userActions.logout());
        localStorage.clear();
        router.push('/login');
      },
    },
  ];

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
            src={
              user.avatar &&
              getFileUrl(
                process.env.NEXT_PUBLIC_AWS_S3_USERS_BUCKET,
                `${user.id}/avatar/${user.avatar}`
              )
            }
            sx={{ height: 50, width: 50 }}
          />
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
        }}
        TransitionComponent={Fade}
      >
        {profileLinks.map(
          (i) =>
            !i.hide && (
              <MenuItem
                key={i.value}
                onClick={(e) => {
                  e.preventDefault();
                  i.handler();
                  closeMenu();
                }}
              >
                <Box sx={{ mr: 1, color: 'primary' }}>{i.icon}</Box>
                <Text variant="sub" color="text.secondary">
                  {i.value}
                </Text>
              </MenuItem>
            )
        )}
      </ArrowMenu>
    </React.Fragment>
  );
};

export default ProfileMenu;
