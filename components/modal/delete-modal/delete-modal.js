import React from 'react';
import { enqueueSnackbar } from 'notistack';
import { useRestaurantContext } from '@/context/restaurant-context';

// Styles
import { Button, Modal } from '@mui/material';
import * as Styles from './delete-modal.styles';
import { FlexContainer, Text } from '@/components/UI';

// Icons
import Delete from '@mui/icons-material/Delete';

// Services
import { deleteRestaurantImages } from '@/services';

// Helpers
import { getError } from '@/helpers/snackbarHelpers';

const DeleteModal = ({ showModal, handleCloseModal, filteredImages }) => {
  const { details, detailsHandler } = useRestaurantContext();

  const deleteImageHandler = async () => {
    try {
      const { updatedImages, removedImages } = filteredImages();
      await deleteRestaurantImages(details.id, { images: removedImages });
      detailsHandler({ images: updatedImages });
      handleCloseModal();
      enqueueSnackbar({ variant: 'success', message: 'Image(s) deleted successfully' });
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

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
          <Button variant="contained" color="error" onClick={deleteImageHandler}>
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
