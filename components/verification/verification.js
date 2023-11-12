import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Services
import { verifyAccount } from '@/services';

// Snackbar
import { enqueueSnackbar } from 'notistack';
import { getError } from '@/helpers/snackbarHelpers';

// Styles
import { SecondaryContainer, Text } from '../UI';
import { Grid } from '@mui/material';

const Verification = () => {
  const router = useRouter();
  const { token } = router.query;

  const navigateToLogin = () => {
    router.push(`/login`, null, { shallow: true });
  };

  useEffect(() => {
    console.log('hello');
    if (!router.isReady) return;
    if (!token) {
      navigateToLogin();
      return;
    }

    (async () => {
      try {
        const res = await verifyAccount(token);
        enqueueSnackbar({
          variant: 'success',
          message: res.data,
          onExited: navigateToLogin,
        });
      } catch (e) {
        enqueueSnackbar({ variant: 'error', message: getError(e) });
      }
    })();

    // eslint-disable-next-line
  }, [token]);

  return (
    <SecondaryContainer container sx={{ height: '70%' }}>
      <Grid item xs={12} sx={{ position: 'relative', height: '70%' }}>
        <Image
          src={'/assets/images/food.svg'}
          fill={true}
          sizes="100vw"
          alt="login-image"
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Text variant="header">Verifying Your Account</Text>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <Text variant="subHeader" fontWeight={800} mr={1}>
          Please wait
        </Text>
      </Grid>
    </SecondaryContainer>
  );
};

export default Verification;
