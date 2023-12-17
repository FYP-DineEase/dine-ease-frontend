import React, { useState } from 'react';

// Styles
import * as Styles from './restaurant-images.styles';
import {
  DashboardContainer,
  DashboardContent,
  FlexContainer,
  PrimaryButton,
  Text,
} from '@/components/UI';
import {
  Grid,
  IconButton,
  ImageList,
  Input,
  Tooltip,
  useMediaQuery,
} from '@mui/material';

// Utils
import { validateFiles } from '@/utils/validateFiles';

// Icons
import UploadFile from '@mui/icons-material/UploadFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Delete from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

// Snackbar
import { enqueueSnackbar } from 'notistack';

//Modals
import PreviewModal from './preview-modal/preview-modal';
import DeleteModal from '@/components/modal/delete-modal/delete-modal';

const RestaurantImages = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const checkImageCount = () => {
    if (images.length + previewImages.length > 10) {
      enqueueSnackbar({
        variant: 'error',
        message: 'Total 10 Images can be featured at a time',
      });
      return false;
    } else if (previewImages.length === 0) {
      enqueueSnackbar({
        variant: 'error',
        message: 'Upload atleast 1 image',
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

  const handleShowDeleteModal = () => {
    setShowDeleteModal((prevState) => !prevState);
  };

  const handleShowPreviewModal = () => {
    setShowPreviewModal(true);
  };

  const handleClosePreviewModal = () => {
    setShowPreviewModal(false);
  };

  const previewImageSaveHandler = () => {
    if (checkImageCount()) {
      setImages((prevState) => [...prevState, ...previewImages]);
      setShowPreviewModal(false);
      setPreviewImages([]);
    }
  };

  const previewImageUploadHandler = (event) => {
    const selectedImagesFiles = event.target.files;
    if (validateFiles(selectedImagesFiles)) {
      const selectedImages = Array.from(selectedImagesFiles).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewImages((prevState) => [...prevState, ...selectedImages]);
      event.target.value = '';
      handleShowPreviewModal();
    } else {
      enqueueSnackbar({
        variant: 'error',
        message: 'Invalid Extension Type',
      });
    }
  };

  const previewImageDeleteHandler = (index) => {
    const duplicatePreviewImages = [...previewImages];
    duplicatePreviewImages.splice(index, 1);
    setPreviewImages(duplicatePreviewImages);
  };

  const imageSelectionHandler = (index) => {
    setSelectedImages((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((prevIndex) => prevIndex !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  const imageDeletionHandler = () => {
    const updatedImages = images.filter(
      (image, index) => !selectedImages.includes(index)
    );
    setImages(updatedImages);
    setSelectedImages([]);
  };

  const imageResetHandler = () => {
    setSelectedImages([]);
  };

  return (
    <React.Fragment>
      <PreviewModal
        showModal={showPreviewModal}
        handleCloseModal={handleClosePreviewModal}
        previewImages={previewImages}
        previewImageSaveHandler={previewImageSaveHandler}
        previewImageUploadHandler={previewImageUploadHandler}
        previewImageDeleteHandler={previewImageDeleteHandler}
      />
      <DeleteModal
        handleCloseModal={handleShowDeleteModal}
        showModal={showDeleteModal}
        handleDelete={imageDeletionHandler}
      />
      <DashboardContainer container>
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
                inputProps={{ multiple: true, accept: 'image/*' }}
                sx={{ display: 'none' }}
              />
            </Styles.ImagePlaceHolder>
          </Styles.ImagePlaceContainer>
        ) : (
          <Grid item xs={12}>
            <DashboardContent>
              <FlexContainer
                sx={{ justifyContent: 'space-between', mb: 3, flexWrap: 'wrap' }}
              >
                <Text variant="subHeader" fontWeight={500}>
                  Restaurant Images
                </Text>
                <Tooltip
                  open={images.length === 10}
                  title="Maximum 10 images allowed at a time. Delete some old images to upload new images."
                  placement="top"
                >
                  <PrimaryButton
                    component="label"
                    variant="contained"
                    startIcon={<UploadFile />}
                    onChange={previewImageUploadHandler}
                    disabled={images.length === 10}
                    sx={{ ml: 'auto' }}
                  >
                    <Text variant="body">Upload file</Text>
                    <Input
                      type="file"
                      inputProps={{ multiple: true, accept: 'image/*' }}
                      sx={{ display: 'none' }}
                    />
                  </PrimaryButton>
                </Tooltip>
              </FlexContainer>
              <ImageList
                cols={isMobile ? 1 : 3}
                gap={isMobile ? 10 : 20}
                rowHeight={isMobile ? 200 : 425}
                sx={{ maxHeight: isMobile ? '400px' : '875px' }}
              >
                {images.map((image, index) => (
                  <Styles.StyledImageListItem
                    key={index}
                    selected={+selectedImages.includes(index)}
                    onClick={() => imageSelectionHandler(index)}
                  >
                    <Styles.StyledImage
                      src={image}
                      alt="review-image"
                      fill
                      sizes="100vw"
                      selected={+selectedImages.includes(index)}
                    />
                  </Styles.StyledImageListItem>
                ))}
              </ImageList>
              <Styles.DeletePopper open={selectedImages.length}>
                <FlexContainer gap={1.5}>
                  <IconButton onClick={imageResetHandler} color="primary">
                    <Tooltip title="Reset Selected Images" placement="top" arrow>
                      <CloseIcon />
                    </Tooltip>
                  </IconButton>
                  <Text variant="body">{selectedImages.length} Selected Images</Text>
                  <IconButton onClick={handleShowDeleteModal} color="error">
                    <Tooltip title="Delete Selected Images" placement="top" arrow>
                      <Delete />
                    </Tooltip>
                  </IconButton>
                </FlexContainer>
              </Styles.DeletePopper>
            </DashboardContent>
          </Grid>
        )}
      </DashboardContainer>
    </React.Fragment>
  );
};

export default RestaurantImages;
