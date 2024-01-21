import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState, userActions } from '@/store/user/userSlice';

// Styles
import * as Styles from './menu.styles';
import { ArrowMenu, Text } from '@/components/UI';
import { Avatar, Badge, Fade, IconButton, MenuItem } from '@mui/material';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import RestaurantIcon from '@mui/icons-material/Restaurant';
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

  const handleLogout = () => {
    dispatch(userActions.logout());
    localStorage.clear();
    closeMenu();
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
            src={
              user.avatar &&
              getFileUrl(
                process.env.NEXT_PUBLIC_USER_BUCKET,
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
        {user.role === UserRoles.MANAGER && (
          <MenuItem
            onClick={(e) => {
              e.preventDefault();
              router.push(`/restaurant/listing`);
              closeMenu();
            }}
          >
            <RestaurantIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
            <Text variant="sub" color="text.secondary">
              List Restaurant
            </Text>
          </MenuItem>
        )}
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            router.push(`/profile/${user.slug}`);
            closeMenu();
          }}
        >
          <SettingsIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
          <Text variant="sub" color="text.secondary">
            Profile
          </Text>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
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
