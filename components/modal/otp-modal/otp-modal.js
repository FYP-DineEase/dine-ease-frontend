import React, { useState } from 'react';

// Styles
import * as Styles from './otp-modal.styles';
import { Modal } from '@mui/material';
import { ModalCancelIcon, PrimaryButton, Text } from '@/components/UI';

// Icons
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import CloseIcon from '@mui/icons-material/Close';

const OtpModal = ({ showModal, handleCloseModal }) => {
  const [otp, setOtp] = useState('');

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <Modal open={showModal}>
      <Styles.ModalContainer>
        <ModalCancelIcon onClick={handleCloseModal}>
          <CloseIcon color="secondary" fontSize="medium" />
        </ModalCancelIcon>
        <MobileFriendlyIcon sx={{ fontSize: '5rem' }} color="primary" />
        <Text variant="main" fontWeight={800}>
          Verify OTP
        </Text>
        <Text variant="body" textAlign="center">
          An OTP has been sent to mobile number +923319555911
        </Text>
        <Styles.StyledOtp
          value={otp}
          onChange={handleChange}
          gap={1}
          length={6}
          autoFocus
        />
        <PrimaryButton>
          <Text variant="body">Verify</Text>
        </PrimaryButton>
        <Text variant="sub">
          Did not recieve code?
          <Text variant="sub" color="primary" ml={0.5}>
            Resend OTP
          </Text>
        </Text>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default OtpModal;
