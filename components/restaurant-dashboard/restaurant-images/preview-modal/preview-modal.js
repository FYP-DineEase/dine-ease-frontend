import React from 'react';
import Image from 'next/image';

//Styles
import * as Styles from './preview-modal.styles';
import { Button, ImageList, ImageListItem, Input, Modal } from '@mui/material';
import { ModalCancelIcon, PrimaryButton, Text } from '@/components/UI';

//Icons
import CloseIcon from '@mui/icons-material/Close';

const PreviewModal = ({
  showModal,
  handleCloseModal,
  previewImages,
  previewImageUploadHandler,
  previewImageSaveHandler,
  previewImageDeleteHandler,
}) => {
  return (
    <Modal open={showModal} onClose={handleCloseModal}>
      <Styles.ModalContainer>
        <ModalCancelIcon onClick={handleCloseModal}>
          <CloseIcon color="secondary" fontSize="medium" />
        </ModalCancelIcon>
        <Text variant="subHeader" fontWeight={800} mb={1.5}>
          Preview Images
        </Text>
        <Styles.ImageListContainer>
          <ImageList
            rowHeight={250}
            cols={previewImages.length === 1 ? 1 : 2}
            variant="quilted"
            gap={10}
          >
            {previewImages.map((image, index) => (
              <ImageListItem key={index}>
                <Image
                  src={image}
                  alt="review-image"
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                />
                <Styles.ImageDeleteIcon
                  color="error"
                  onClick={() => previewImageDeleteHandler(index)}
                >
                  <CloseIcon fontSize="medium" />
                </Styles.ImageDeleteIcon>
              </ImageListItem>
            ))}
          </ImageList>
        </Styles.ImageListContainer>
        <Button
          component="label"
          variant="contained"
          onChange={previewImageUploadHandler}
        >
          Upload file
          <Input type="file" inputProps={{ multiple: true }} sx={{ display: 'none' }} />
        </Button>
        <PrimaryButton>
          <Text variant="body" onClick={previewImageSaveHandler}>
            Save Changes
          </Text>
        </PrimaryButton>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default PreviewModal;
