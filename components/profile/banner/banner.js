import React, { useContext } from 'react';
import Image from 'next/image';
import ProfileContext from '@/context/profile-context/profile-context';

//Styles
import { Box, Button } from '@mui/material';
import { Text } from '@/components/UI';
import { BannerContainer } from './banner.styles';

//Snackbar
import { enqueueSnackbar } from 'notistack';


const Banner = () => {
  const { profileDetails, profileBackgroundHandler, profileNewBackgroundHandler } =
    useContext(ProfileContext);

  const { background, newBackground } = profileDetails;

  const handleConfirmBanner = () => {
    enqueueSnackbar({ variant: 'success', message: 'Banner Updated Successfully!' });
    profileBackgroundHandler(newBackground);
    profileNewBackgroundHandler(null);
  };
  const handleCancelBanner = () => {
    profileNewBackgroundHandler(null);
  };

  return (
    <BannerContainer>
      <Image
        src={newBackground || background}
        fill={true}
        objectFit="cover"
        alt="profile-background"
      />
      <Box sx={{ position: 'absolute', top: 15, right: 15 }}>
        {newBackground && (
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
