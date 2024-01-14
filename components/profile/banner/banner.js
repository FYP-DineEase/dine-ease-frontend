import React, { useState } from 'react';
import Image from 'next/image';
import { enqueueSnackbar } from 'notistack';
import { useProfileContext } from '@/context/profile-context';

// Services
import { updateProfileImage } from '@/services';

// Styles
import { Box, Button } from '@mui/material';
import { Text } from '@/components/UI';
import { BannerContainer } from './banner.styles';

// Helpers
import { getFileUrl } from '@/helpers/fileHelpers';
import { getError } from '@/helpers/snackbarHelpers';

const Banner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { details, detailsHandler } = useProfileContext();
  const { cover, newCover } = details;

  const handleConfirmBanner = async () => {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append('type', 'cover');
      formData.append('file', newCover);

      const response = await updateProfileImage(formData);
      detailsHandler({ cover: response.data, newCover: null });

      enqueueSnackbar({
        variant: 'success',
        message: 'Cover Updated Successfully!',
      });
    } catch (e) {
      setIsSubmitting(false);
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  const handleCancelBanner = () => {
    detailsHandler({ newCover: null });
  };

  return (
    <BannerContainer>
      <Image
        src={
          (newCover && URL.createObjectURL(newCover)) ||
          (cover &&
            getFileUrl(
              process.env.NEXT_PUBLIC_USER_BUCKET,
              `${details.id}/cover/${cover}`
            )) ||
          '/assets/images/bg-placeholder.jpg'
        }
        fill={true}
        objectFit="cover"
        alt="User Cover"
      />
      <Box sx={{ position: 'absolute', top: 15, right: 15 }}>
        {newCover && (
          <React.Fragment>
            <Button
              variant="contained"
              color="success"
              sx={{ mr: 1 }}
              onClick={handleConfirmBanner}
              disabled={isSubmitting}
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
