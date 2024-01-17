import React, { useState } from 'react';
import { useRestaurantContext } from '@/context/restaurant-context';

// Styles
import * as Styles from './restaurant-logo.styles';
import { FlexContainer, Text } from '@/components/UI';
import { Avatar, Box, Button, Divider, IconButton, Input, Tooltip } from '@mui/material';

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { allowedImageTypes } from '@/utils/constants';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { enqueueSnackbar } from 'notistack';
import { validateImage } from '@/helpers/fileHelpers';

const RestaurantLogo = ({ open }) => {
  const { details } = useRestaurantContext();

  const [newAvatar, setNewAvatar] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAvatarChange = (event) => {
    try {
      const file = event.target.files[0];
      validateImage(file);
      setNewAvatar(file);
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: e.message });
    }
  };

  const handleConfirmAvatar = async () => {
    // try {
    //   setIsSubmitting(true);
    //   const formData = new FormData();
    //   formData.append('type', 'avatar');
    //   formData.append('file', newAvatar);
    //   const response = await updateProfileImage(formData);
    //   detailsHandler({ avatar: response.data });
    //   handleCancelAvatar();
    //   enqueueSnackbar({
    //     variant: 'success',
    //     message: 'Avatar Updated Successfully!',
    //   });
    // } catch (e) {
    //   enqueueSnackbar({ variant: 'error', message: getError(e) });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleCancelAvatar = () => {
    setNewAvatar(null);
  };

  return (
    <Styles.RestaurantDetails open={open}>
      <Box position="relative">
        <Avatar
          alt="restaurant-avatar"
          src={
            (newAvatar && URL.createObjectURL(newAvatar)) ||
            '/assets/images/bg-placeholder.png'
          }
          sx={{ height: 120, width: 120 }}
        />
        <Styles.AvatarButton component="label" onChange={handleAvatarChange}>
          <CameraAltIcon sx={{ color: 'white' }} fontSize="small" />
          <Input
            type="file"
            inputProps={{
              accept: allowedImageTypes.join(', '),
            }}
            sx={{ display: 'none' }}
          />
        </Styles.AvatarButton>
        {newAvatar && (
          <Styles.AvatarConfirmation>
            <Tooltip title="Save Changes" placement="top" arrow>
              <IconButton onClick={handleConfirmAvatar} disabled={!newAvatar}>
                <CheckCircleIcon color="success" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cancel Changes" placement="top" arrow>
              <IconButton onClick={handleCancelAvatar} disabled={!newAvatar}>
                <CancelIcon color="error" />
              </IconButton>
            </Tooltip>
          </Styles.AvatarConfirmation>
        )}
      </Box>
      <Text variant="subHeader" fontWeight={500}>
        {details.name}
      </Text>
      <FlexContainer gap={1}>
        4
        <Text variant="body" color="text.ternary">
          (353 Reviews)
        </Text>
      </FlexContainer>
      <Divider variant="middle" flexItem sx={{ mt: 1, mb: 0.5 }} />
    </Styles.RestaurantDetails>
  );
};

export default RestaurantLogo;
