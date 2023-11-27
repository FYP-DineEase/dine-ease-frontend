import React from 'react';

//Styles
import { Button, Modal } from '@mui/material';
import * as Styles from './delete-modal.styles';
import { FlexContainer, Text } from '@/components/UI';

//Icons
import Delete from '@mui/icons-material/Delete';

const DeleteModal = ({ showModal, handleCloseModal, handleDelete }) => {
  return (
    <Modal open={showModal} onClose={handleCloseModal}>
      <Styles.ModalContainer>
        <Delete sx={{ fontSize: '6rem' }} color="error" />
        <Text variant="main" fontWeight={800}>
          Delete Confirmation
        </Text>
        <Text variant="body" textAlign="center">
          Are you sure you want to perform this delete action?
        </Text>
        <FlexContainer gap={2}>
          <Button variant="outlined" onClick={handleCloseModal}>
            <Text variant="body">Cancel</Text>
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDelete();
              handleCloseModal();
            }}
          >
            <Text variant="body" color="text.primary">
              Confirm
            </Text>
          </Button>
        </FlexContainer>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default DeleteModal;
