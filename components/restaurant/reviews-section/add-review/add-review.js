import React, { useState } from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';

// Styles
import * as Styles from './add-review.styles';
import { FlexContainer, InputField, PrimaryButton, Text } from '@/components/UI';
import { Box, Input, Rating } from '@mui/material';

// Icons
import Delete from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';

// Helpers
import { validateImage } from '@/helpers/fileHelpers';
import { getError } from '@/helpers/snackbarHelpers';

// Snackbar
import { enqueueSnackbar } from 'notistack';

// Utils
import { reviewSchema } from '@/utils/validation-schema/review';
import { allowedImageTypes } from '@/utils/constants';

const AddReview = () => {
  const [previewImages, setPreviewImages] = useState([]);

  const imageChangeHandler = (event) => {
    try {
      const newImages = event.target.files;
      for (const file of newImages) validateImage(file);
      setPreviewImages((prevImages) => [...prevImages, ...newImages]);
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  const deleteImageHandler = (index) => {
    setPreviewImages((prevImages) => {
      prevImages.splice(index, 1);
      return prevImages.slice();
    });
  };

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      console.log(values);
      //   enqueueSnackbar({
      //     variant: 'success',
      //     message: 'Profile Updated',
      //     onEnter: () => closeModal(),
      //   });
    } catch (e) {
      //   enqueueSnackbar({
      //     variant: 'error',
      //     message: getError(e),
      //     onExited: () => closeModal(),
      //   });
    } finally {
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      content: '',
      rating: 0,
    },
    validationSchema: reviewSchema,
    onSubmit: submitHandler,
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Rating
        name="rating"
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        value={formik.values.rating}
        onChange={(e, newValue) => {
          formik.setFieldValue('rating', newValue);
        }}
        onBlur={formik.handleBlur}
      />
      {formik.errors.rating && Boolean(formik.touched.rating) && (
        <Text variant="body" color="error">
          {formik.errors.rating}
        </Text>
      )}
      <InputField
        name="content"
        label="Comment Your Experience."
        variant="outlined"
        placeholder="Enter Review"
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.content && Boolean(formik.touched.content)}
        helperText={formik.touched.content && formik.errors.content}
        multiline
        minRows={3}
        maxRows={6}
      />
      <FlexContainer sx={{ justifyContent: 'left', gap: 1.5 }}>
        {previewImages.map((image, index) => (
          <Box key={index} position="relative">
            <Image
              src={URL.createObjectURL(image)}
              alt="preview-image"
              height={130}
              width={150}
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />

            <Styles.ImageDeleteIcon
              disableRipple
              sx={{ backgroundColor: 'red' }}
              color="inherit"
              onClick={() => deleteImageHandler(index)}
            >
              <Delete fontSize="small" sx={{ color: 'text.primary' }} />
            </Styles.ImageDeleteIcon>
          </Box>
        ))}
        <Styles.ImagePlaceHolder component="label" onChange={imageChangeHandler}>
          <ImageIcon color="primary" fontSize="large" />
          <Text variant="body" fontWeight={500}>
            Attach Image.
          </Text>
          <Input
            type="file"
            inputProps={{ multiple: true, accept: allowedImageTypes.join(', ') }}
            sx={{ display: 'none' }}
          />
        </Styles.ImagePlaceHolder>
      </FlexContainer>
      <PrimaryButton type="submit" disabled={formik.isSubmitting}>
        <Text variant="body">Post Review</Text>
      </PrimaryButton>
    </Box>
  );
};

export default AddReview;
