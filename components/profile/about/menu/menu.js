import React, { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useProfileContext } from '@/context/profile-context';

// Styles
import { Menu, MenuItem, Fade, InputLabel, Input, IconButton } from '@mui/material';
import { EditContainer } from './menu.styles';
import { Text } from '@/components/UI';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

// Helpers
import { validateImage } from '@/helpers/fileHelpers';

// Utils
import { allowedImageTypes } from '@/utils/constants';

const EditProfileMenu = ({ handleAvatar, openModal }) => {
  const { detailsHandler } = useProfileContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleBannerImage = (event) => {
    try {
      const file = event.target.files[0];
      validateImage(file);
      detailsHandler({ newCover: file });
      closeMenu();
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: e.message });
    }
  };

  const handleAvatarChange = (event) => {
    try {
      const file = event.target.files[0];
      validateImage(file);
      handleAvatar(file);
      closeMenu();
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: e.message });
    }
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
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: '50%',
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            openModal();
            closeMenu();
          }}
        >
          <EditIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
          <Text variant="sub" color="text.secondary">
            Edit Information
          </Text>
        </MenuItem>
        <InputLabel htmlFor="user-avatar">
          <MenuItem>
            <CameraAltIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
            <Text variant="sub" color="text.secondary">
              Change Avatar
            </Text>
          </MenuItem>
          <Input
            id="user-avatar"
            type="file"
            sx={{ display: 'none' }}
            inputProps={{ accept: allowedImageTypes.join(', ') }}
            onChange={handleAvatarChange}
          />
        </InputLabel>
        <InputLabel htmlFor="user-cover">
          <MenuItem>
            <CameraAltIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
            <Text variant="sub" color="text.secondary">
              Change Cover
            </Text>
          </MenuItem>
          <Input
            id="user-cover"
            type="file"
            sx={{ display: 'none' }}
            inputProps={{ accept: allowedImageTypes.join(', ') }}
            onChange={handleBannerImage}
          />
        </InputLabel>
      </Menu>
    </React.Fragment>
  );
};

export default EditProfileMenu;
