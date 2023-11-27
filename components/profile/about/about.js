import React, { useContext, useRef, useState } from 'react';

// Components
import EditProfileMenu from './menu/menu';

// Styles
import { Avatar, Box, IconButton, Tooltip } from '@mui/material';
import { Text } from '@/components/UI';
import * as Styles from './about.styles';

// Icons
import InfoIcon from '@mui/icons-material/InfoOutlined';
import TodayIcon from '@mui/icons-material/Today';
import LocationIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { enqueueSnackbar } from 'notistack';
import ProfileDetailsModal from './profile-details-modal/profile-details-modal';
import ProfileContext from '@/store/profile-context/profile-context';

const About = () => {
  const ProfileCtx = useContext(ProfileContext);
  const [avatarConfirmation, setAvatarConfirmation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const oldAvatar = useRef(null);

  const handleBanner = (file) => {
    ProfileCtx.oldBackground = ProfileCtx.background;
    ProfileCtx.profileBackgroundHandler(URL.createObjectURL(file));
    ProfileCtx.backgroundConfirmationHandler(true);
  };

  const handleAvatar = (file) => {
    oldAvatar.current = ProfileCtx.avatar;
    ProfileCtx.profileAvatarHandler(URL.createObjectURL(file));
    setAvatarConfirmation(true);
  };

  const handleConfirmAvatar = () => {
    enqueueSnackbar({
      variant: 'success',
      message: 'Profile Image Updated Successfully!',
    });
    setAvatarConfirmation(false);
  };
  const handleCancelAvatar = () => {
    setAvatarConfirmation(false);
    ProfileCtx.profileAvatarHandler(oldAvatar.current);
  };

  const handleShowModal = () => setShowModal((prevState) => !prevState);

  return (
    <React.Fragment>
      {showModal && (
        <ProfileDetailsModal showModal={showModal} handleShowModal={handleShowModal} />
      )}
      <Styles.AboutContainer>
        <Styles.ProfileAvatarContainer>
          <Avatar
            alt="Remy Sharp"
            src={ProfileCtx.avatar}
            sx={{ height: '100%', width: '100%' }}
          />
          {avatarConfirmation && (
            <Styles.AvatarConfirmation>
              <Tooltip title="Save Changes" placement="top" arrow>
                <IconButton onClick={handleConfirmAvatar}>
                  <CheckCircleIcon color="success" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cancel Changes" placement="top" arrow>
                <IconButton onClick={handleCancelAvatar}>
                  <CancelIcon color="error" />
                </IconButton>
              </Tooltip>
            </Styles.AvatarConfirmation>
          )}
        </Styles.ProfileAvatarContainer>
        <EditProfileMenu
          handleAvatar={handleAvatar}
          handleShowModal={handleShowModal}
          handleBanner={handleBanner}
        />
        <Styles.DetailsContainer>
          <Text variant="main" fontWeight={500}>
            {ProfileCtx.profileDetails.firstName} {ProfileCtx.profileDetails.lastName}
          </Text>
          <Styles.IconContainer>
            <MailIcon color="primary" fontSize="small" />
            <Text variant="body">{ProfileCtx.profileDetails.email}</Text>
          </Styles.IconContainer>
          <Styles.IconContainer>
            <LocationIcon color="primary" fontSize="small" />
            <Text variant="body">{ProfileCtx.profileDetails.location}</Text>
          </Styles.IconContainer>
          <Styles.IconContainer>
            <TodayIcon color="primary" fontSize="small" />
            <Text variant="body">{ProfileCtx.profileDetails.joinDate}</Text>
          </Styles.IconContainer>
          <Box>
            <Styles.IconContainer>
              <InfoIcon color="primary" fontSize="small" />
              <Text variant="body" fontWeight={500}>
                About
              </Text>
            </Styles.IconContainer>
            <Text variant="body" sx={{ textAlign: 'left', display: 'block' }}>
              {ProfileCtx.profileDetails.description}
            </Text>
          </Box>
        </Styles.DetailsContainer>
      </Styles.AboutContainer>
    </React.Fragment>
  );
};

export default About;
