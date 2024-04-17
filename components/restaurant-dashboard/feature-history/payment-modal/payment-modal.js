import React from 'react';

// Styles
import * as Styles from './payment-modal.styles';
import { IconButton, Modal } from '@mui/material';
import { Text } from '@/components/UI';

// Icons
import CloseIcon from '@mui/icons-material/Close';

const PaymentModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal open={showModal} onClose={handleCloseModal}>
      <Styles.ModalContainer>
        <IconButton
          sx={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={handleCloseModal}
        >
          <CloseIcon color="secondary" fontSize="medium" />
        </IconButton>
        <Text variant="subHeader" fontWeight={800} mb={1.5}>
          Payment Details
        </Text>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default PaymentModal;
