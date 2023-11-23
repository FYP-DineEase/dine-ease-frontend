import React, { useState } from 'react';

// Styles
import { Menu, MenuItem, Fade } from '@mui/material';
import { EditContainer } from './menu.styles';
import { Text } from '@/components/UI';

// Icons
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';

const EditProfileMenu = () => {
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
      <EditContainer
        onClick={openMenu}
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Text variant="main" fontWeight={500}>
          Edit
        </Text>
        <SettingsIcon />
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
        <MenuItem onClick={openMenu}>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={openMenu}>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={openMenu}>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={openMenu}>
          <MoreHorizIcon />
          More
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default EditProfileMenu;
