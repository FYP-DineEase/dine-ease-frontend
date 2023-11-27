import React, { useState } from 'react';

// Styles
import { Menu, MenuItem, Fade, InputLabel, Input, IconButton } from '@mui/material';
import { EditContainer } from './menu.styles';
import { Text } from '@/components/UI';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const EditProfileMenu = ({ handleAvatar, handleShowModal, handleBanner }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleProfileImage = (event) => {
    handleAvatar(event.target.files[0]);
    closeMenu();
  };

  const handleBannerImage = (event) => {
    handleBanner(event.target.files[0]);
    closeMenu();
  };

  return (
    <React.Fragment>
      <EditContainer
        onClick={openMenu}
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <IconButton>
          <SettingsIcon color="primary" fontSize="medium" />
        </IconButton>
      </EditContainer>

      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            handleShowModal();
            closeMenu();
          }}
        >
          <EditIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
          <Text variant="sub" color="text.secondary">
            Edit Information
          </Text>
        </MenuItem>
        <InputLabel htmlFor="profile-image">
          <MenuItem>
            <CameraAltIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
            <Text variant="sub" color="text.secondary">
              Change Profile Image
            </Text>
          </MenuItem>
          <Input
            id="profile-image"
            type="file"
            sx={{ display: 'none' }}
            onChange={handleProfileImage}
          />
        </InputLabel>
        <InputLabel htmlFor="background-image">
          <MenuItem>
            <CameraAltIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
            <Text variant="sub" color="text.secondary">
              Change Background Image
            </Text>
          </MenuItem>
          <Input
            id="background-image"
            type="file"
            sx={{ display: 'none' }}
            onChange={handleBannerImage}
          />
        </InputLabel>
      </Menu>
    </React.Fragment>
  );
};

export default EditProfileMenu;
