import React, { useContext, useState } from 'react';
import ProfileContext from '@/context/profile-context/profile-context';

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

//Snackbar
import { enqueueSnackbar } from 'notistack';

//Modal
import ProfileDetailsModal from './profile-details-modal/profile-details-modal';

const About = () => {
  const { profileDetails, profileAvatarHandler } = useContext(ProfileContext);

  const { avatar, firstName, lastName, email, location, joinDate, description } =
    profileDetails;

  const [newAvatar, setNewAvatar] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const handleAvatar = (image) => {
    setNewAvatar(URL.createObjectURL(image));
  };

  const handleConfirmAvatar = () => {
    enqueueSnackbar({
      variant: 'success',
      message: 'Profile Image Updated Successfully!',
    });
    profileAvatarHandler(newAvatar);
    setNewAvatar(null);
  };
  const handleCancelAvatar = () => {
    setNewAvatar(null);
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
            src={newAvatar || avatar}
            sx={{ height: '100%', width: '100%' }}
          />
          {newAvatar && (
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
        <EditProfileMenu handleAvatar={handleAvatar} handleShowModal={handleShowModal} />
        <Styles.DetailsContainer>
          <Box>
            <Text variant="main" fontWeight={500}>
              {firstName} {lastName}
            </Text>
            <Styles.IconContainer>
              <MailIcon color="primary" fontSize="small" />
              <Text variant="body">{email}</Text>
            </Styles.IconContainer>
            <Styles.IconContainer>
              <LocationIcon color="primary" fontSize="small" />
              <Text variant="body">{location}</Text>
            </Styles.IconContainer>
            <Styles.IconContainer>
              <TodayIcon color="primary" fontSize="small" />
              <Text variant="body">{joinDate}</Text>
            </Styles.IconContainer>
          </Box>
          <Box>
            <Styles.IconContainer>
              <InfoIcon color="primary" fontSize="small" />
              <Text variant="body" fontWeight={500}>
                About
              </Text>
            </Styles.IconContainer>
            <Text variant="body" sx={{ textAlign: 'left', display: 'block' }}>
              {description}
            </Text>
          </Box>
        </Styles.DetailsContainer>
      </Styles.AboutContainer>
    </React.Fragment>
  );
};

export default About;
