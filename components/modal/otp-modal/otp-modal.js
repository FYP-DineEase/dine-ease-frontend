import React, { useState } from 'react';

// Styles
import * as Styles from './otp-modal.styles';
import { Button, Modal } from '@mui/material';

// Icons
import Delete from '@mui/icons-material/Delete';
import { FlexContainer, PrimaryButton, Text } from '@/components/UI';
import { MuiOtpInput } from 'mui-one-time-password-input';
import Link from 'next/link';

const OtpModal = ({ showModal, handleCloseModal }) => {
  const [otp, setOtp] = useState('');

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <Modal open={showModal}>
      <Styles.ModalContainer>
        <MuiOtpInput
          value={otp}
          onChange={handleChange}
          length={6}
          autoFocus
          sx={{
            input: {
              color: 'text.secondary',
            },
          }}
        />
        <FlexContainer sx={{ flexDirection: 'column' }}>
          <PrimaryButton>
            <Text variant="body">Verify</Text>
          </PrimaryButton>
          <Text variant="sub">
            Did not recieve code?
            <Text variant="sub" color="primary" ml={0.5}>
              Resend OTP
            </Text>
          </Text>
        </FlexContainer>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default OtpModal;