import React, { useState } from 'react';

// Styles
import * as Styles from './restaurant-images.styles';
import { DashboardContainer, DashboardContent, Text } from '@/components/UI';
import { Button, Grid, ImageList, ImageListItem, Input, Tooltip } from '@mui/material';

// Icons
import UploadFile from '@mui/icons-material/UploadFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Snackbar
import { enqueueSnackbar } from 'notistack';

import PreviewModal from './preview-modal/preview-modal';

const RestaurantImages = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const checkImageCount = () => {
    if (images.length + previewImages.length > 10) {
      enqueueSnackbar({
        variant: 'error',
        message: 'Total 10 Images can be featured at a time',
      });
      return false;
    } else {
      enqueueSnackbar({
        variant: 'success',
        message: 'Restaurant Images Saved!',
      });
      return true;
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const previewImageSaveHandler = () => {
    if (checkImageCount()) {
      setImages((prevState) => [...prevState, ...previewImages]);
      setShowModal(false);
      setPreviewImages([]);
    }
  };

  const previewImageUploadHandler = (event) => {
    const selectedImagesFiles = event.target.files;
    const selectedImages = Array.from(selectedImagesFiles).map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewImages((prevState) => [...prevState, ...selectedImages]);
    event.target.value = '';
    handleShowModal();
  };

  const previewImageDeleteHandler = (index) => {
    const duplicatePreviewImages = [...previewImages];
    duplicatePreviewImages.splice(index, 1);
    setPreviewImages(duplicatePreviewImages);
  };

  return (
    <React.Fragment>
      <PreviewModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        previewImages={previewImages}
        previewImageSaveHandler={previewImageSaveHandler}
        previewImageUploadHandler={previewImageUploadHandler}
        previewImageDeleteHandler={previewImageDeleteHandler}
      />

      <DashboardContainer
        container
        minHeight="90vh"
        justifyContent="center"
        alignItems="center"
      >
        {!images.length ? (
          <Styles.ImagePlaceContainer>
            <Styles.ImagePlaceHolder
              component="label"
              onChange={previewImageUploadHandler}
            >
              <CloudUploadIcon color="primary" sx={{ fontSize: '5rem' }} />
              <Text variant="main" fontWeight={500}>
                Upload Your Images By Clicking Here.
              </Text>
              <Text variant="sub">Supported file types are: JPG, JPEG, PNG</Text>
              <Input
                type="file"
                inputProps={{ multiple: true }}
                sx={{ display: 'none' }}
              />
            </Styles.ImagePlaceHolder>
          </Styles.ImagePlaceContainer>
        ) : (
          <Grid item xs={12}>
            <DashboardContent>
              <Tooltip
                open={images.length === 10}
                title="Maximum 10 images allowed at a time. Delete some old images to upload new images."
                placement="top"
              >
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<UploadFile />}
                  onChange={previewImageUploadHandler}
                  disabled={images.length === 10}
                >
                  Upload file
                  <Input
                    type="file"
                    inputProps={{ multiple: true }}
                    sx={{ display: 'none' }}
                  />
                </Button>
              </Tooltip>
              {previewImages.length > 0 && (
                <Button variant="outlined" onClick={handleShowModal}>
                  Preview Images
                  <Input
                    type="file"
                    inputProps={{ multiple: true }}
                    sx={{ display: 'none' }}
                  />
                </Button>
              )}
              <ImageList variant="masonry" cols={3} gap={8}>
                {images.map((image, index) => (
                  <ImageListItem key={index}>
                    <img
                      srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={image}
                      alt={image}
                      loading="lazy"
                      style={{ objectFit: 'cover' }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </DashboardContent>
          </Grid>
        )}
      </DashboardContainer>
    </React.Fragment>
  );
};

export default RestaurantImages;
