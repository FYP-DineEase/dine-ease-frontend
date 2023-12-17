import React from 'react';
import Image from 'next/image';

//Styles
import * as Styles from './preview-modal.styles';
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Input,
  Modal,
  useMediaQuery,
} from '@mui/material';
import { ModalCancelIcon, PrimaryButton, Text } from '@/components/UI';

//Icons
import CloseIcon from '@mui/icons-material/Close';
import Delete from '@mui/icons-material/Delete';

const PreviewModal = ({
  showModal,
  handleCloseModal,
  previewImages,
  previewImageUploadHandler,
  previewImageSaveHandler,
  previewImageDeleteHandler,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
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
            rowHeight={225}
            cols={previewImages.length === 1 || isMobile ? 1 : 2}
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
                  disableRipple
                  sx={{ backgroundColor: 'red' }}
                  color="inherit"
                  onClick={() => previewImageDeleteHandler(index)}
                >
                  <Delete fontSize="medium" sx={{ color: 'text.primary' }} />
                </Styles.ImageDeleteIcon>
              </ImageListItem>
            ))}
          </ImageList>
        </Styles.ImageListContainer>
        <Box mt={2}>
          <Button
            component="label"
            variant="outlined"
            sx={{ mr: 2 }}
            onChange={previewImageUploadHandler}
          >
            <Text variant="sub">Upload file</Text>
            <Input
              type="file"
              inputProps={{ multiple: true, accept: 'image/*' }}
              sx={{ display: 'none' }}
            />
          </Button>
          <PrimaryButton>
            <Text variant="sub" onClick={previewImageSaveHandler}>
              Save Changes
            </Text>
          </PrimaryButton>
        </Box>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default PreviewModal;
