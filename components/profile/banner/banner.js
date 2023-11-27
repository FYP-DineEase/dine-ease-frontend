import React, { useContext } from 'react';
import Image from 'next/image';
import ProfileContext from '@/store/profile-context/profile-context';

//Styles
import { Box, Button } from '@mui/material';
import { Text } from '@/components/UI';
import { BannerContainer } from './banner.styles';

//Snackbar
import { enqueueSnackbar } from 'notistack';

import userImage from '@/public/assets/images/avatar.jpg';

const Banner = () => {
  const ProfileCtx = useContext(ProfileContext);
  const banner = ProfileCtx.background;

  const handleConfirmBanner = () => {
    enqueueSnackbar({ variant: 'success', message: 'Banner Updated Successfully!' });
    ProfileCtx.backgroundConfirmationHandler(false);
  };
  const handleCancelBanner = () => {
    ProfileCtx.backgroundConfirmationHandler(false);
    ProfileCtx.profileBackgroundHandler(ProfileCtx.oldBackground);
  };

  return (
    <BannerContainer>
      <Image
        src={banner || userImage.src}
        fill={true}
        objectFit="cover"
        alt="profile-background"
      />
      <Box sx={{ position: 'absolute', top: 15, right: 15 }}>
        {ProfileCtx.backgroundConfirmation && (
          <React.Fragment>
            <Button
              variant="contained"
              color="success"
              sx={{ mr: 1 }}
              onClick={handleConfirmBanner}
            >
              <Text variant="body">Save Changes</Text>
            </Button>
            <Button variant="contained" color="error" onClick={handleCancelBanner}>
              <Text variant="body" color="text.primary">
                Cancel
              </Text>
            </Button>
          </React.Fragment>
        )}
      </Box>
    </BannerContainer>
  );
};

export default Banner;
