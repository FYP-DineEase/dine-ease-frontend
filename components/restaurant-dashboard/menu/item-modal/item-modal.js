import React from 'react';
import Image from 'next/image';

//Form
import { useFormik } from 'formik';
import { menuItemSchema } from '@/utils/validation-schema/menu-item';

//Styles
import {
  Button,
  Divider,
  IconButton,
  Input,
  InputAdornment,
  Modal,
  useMediaQuery,
} from '@mui/material';
import * as Styles from './item-modal.styles';
import { FlexContainer, InputField, PrimaryButton, Text } from '@/components/UI';

//Icons
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import userImage from '@/public/assets/images/avatar.jpg';

const ItemModal = ({
  showModal,
  valuesSubmitHandler,
  handleShowModal,
  itemDetails,
  headerTitle,
}) => {
  const { name, price, description, image } = itemDetails;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const submitHandler = async (values) => {
    formik.setSubmitting(true);
    formik.setSubmitting(false);
    valuesSubmitHandler(values);
    handleShowModal();
  };

  const formik = useFormik({
    initialValues: {
      name: name || '',
      price: price || 0,
      description: description || '',
      image: image || userImage,
    },
    validationSchema: menuItemSchema,
    onSubmit: submitHandler,
  });

  // const handleMenuImage = (event) => {
  //   setMenuImage(URL.createObjectURL(event.target.files[0]));
  // };

  return (
    <Modal open={showModal} onClose={handleShowModal}>
      <Styles.ModalContainer component="form" onSubmit={formik.handleSubmit}>
        <IconButton
          sx={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={handleShowModal}
        >
          <CloseIcon color="secondary" fontSize="medium" />
        </IconButton>
        <Text variant="subHeader" fontWeight={800}>
          {headerTitle}
        </Text>
        <Styles.ItemDetails>
          <FlexContainer gap={2} flexDirection="column">
            <InputField
              name="name"
              label="Name"
              variant="outlined"
              placeholder="Enter Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.name && Boolean(formik.touched.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <InputField
              name="price"
              label="Price"
              variant="outlined"
              placeholder="Enter Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.price && Boolean(formik.touched.price)}
              helperText={formik.touched.price && formik.errors.price}
              InputProps={{
                startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
              }}
            />
            <InputField
              name="description"
              label="Description"
              variant="outlined"
              placeholder="Enter Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.description && Boolean(formik.touched.description)}
              helperText={formik.touched.description && formik.errors.description}
              multiline
              rows={2}
            />
          </FlexContainer>
          <Divider
            orientation={isMobile ? 'horizontal' : 'vertical'}
            variant="middle"
            flexItem
          />
          <FlexContainer gap={2} flexDirection="column">
            <Image
              src={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              alt={name || 'menu-item'}
              height={220}
              width={280}
              style={{ borderRadius: '3px' }}
            />
            <Button variant="outlined" component="label" startIcon={<CameraAltIcon />}>
              <Text variant="body" color="primary">
                Change Image
              </Text>
              <Input type="file" sx={{ display: 'none' }} />
            </Button>
          </FlexContainer>
        </Styles.ItemDetails>
        <PrimaryButton type="submit" disabled={formik.isSubmitting}>
          <Text variant="body">Submit</Text>
        </PrimaryButton>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default ItemModal;
