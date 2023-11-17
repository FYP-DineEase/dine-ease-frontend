import React from 'react';
import Image from 'next/image';

import { resendConfirmation } from '@/services';

// Styles
import { IconButton, Modal } from '@mui/material';
import { PrimaryButton, Text } from '@/components/UI';
import * as Styles from './modal.styles';

// Snackbar
import { enqueueSnackbar } from 'notistack';
import { getError } from '@/helpers/snackbarHelpers';

// Icons
import CloseIcon from '@mui/icons-material/Close';

const ResendModal = ({ showModal, handleCloseModal, email }) => {
  const resendVerificationHandler = async () => {
    try {
      const res = await resendConfirmation(email);
      enqueueSnackbar({
        variant: 'success',
        message: res.data,
      });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    } finally {
      handleCloseModal();
    }
  };

  return (
    <Modal open={showModal} onClose={handleCloseModal}>
      <Styles.ModalContainer>
        <IconButton onClick={handleCloseModal} sx={{ ml: 'auto' }}>
          <CloseIcon color="secondary" sx={{ fontSize: 25 }} />
        </IconButton>
        <Image
          src={'/assets/images/food.svg'}
          height={220}
          width={500}
          alt="login-image"
        />
        <Text variant="main" textAlign="center">
          Oopsie! Your Account is unverified please click the button below to resend
          verification at&nbsp;
          <Text variant="main" fontWeight={800}>
            {email}
          </Text>
        </Text>
        <PrimaryButton sx={{ mt: 4 }} onClick={resendVerificationHandler}>
          <Text variant="body">Resend Link</Text>
        </PrimaryButton>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default ResendModal;
