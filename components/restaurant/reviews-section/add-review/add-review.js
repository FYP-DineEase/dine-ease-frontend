import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { selectUserState } from '@/store/user/userSlice';

// Styles
import * as Styles from './add-review.styles';
import { FlexContainer, InputField, PrimaryButton, Text } from '@/components/UI';
import { Avatar, Box, Input, Rating } from '@mui/material';

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

const AddReview = ({ review = null, isModal = false, updateHandler }) => {
  const user = useSelector(selectUserState);
  const [previewImages, setPreviewImages] = useState(review?.images || []);
  const deletedImages = useRef([]);

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
    if (isModal) deletedImages.current.push(index);
  };

  const submitHandler = async (values) => {
    try {
      formik.setSubmitting(true);
      updateHandler({ ...values, images: previewImages });
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
      content: review?.content || '',
      rating: review?.rating || null,
    },
    validationSchema: reviewSchema,
    onSubmit: submitHandler,
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <FlexContainer sx={{ justifyContent: 'space-between', mb: 2 }}>
        {!isModal && (
          <FlexContainer gap={1.5}>
            <Avatar
              alt="User Avatar"
              src={
                user.avatar &&
                getFileUrl(
                  process.env.NEXT_PUBLIC_AWS_S3_USERS_BUCKET,
                  `${user.id}/avatar/${user.avatar}`
                )
              }
              sx={{ height: 72, width: 72, border: '1px solid rgba(0, 0, 0, 0.2)' }}
            >
              {!user.avatar && user.name.slice(0, 1)}
            </Avatar>
            <Text variant="main" fontWeight={500}>
              {user.name}
            </Text>
          </FlexContainer>
        )}
        <Box m={isModal && 'auto'}>
          <Rating
            name="rating"
            value={formik.values.rating}
            onChange={(e, newValue) => {
              formik.setFieldValue('rating', newValue);
            }}
            onBlur={formik.handleBlur}
            sx={{ fontSize: '2.2rem' }}
          />
          {formik.errors.rating && Boolean(formik.touched.rating) && (
            <Text variant="sub" color="error" sx={{ display: 'block' }}>
              {formik.errors.rating}
            </Text>
          )}
        </Box>
      </FlexContainer>
      <InputField
        name="content"
        label="Comment Your Dining Experience."
        variant="outlined"
        placeholder="Enter Review"
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.content && Boolean(formik.touched.content)}
        helperText={formik.touched.content && formik.errors.content}
        multiline
        minRows={isModal ? 4 : 6}
        maxRows={isModal ? 4 : 6}
      />
      <FlexContainer sx={{ justifyContent: 'left', gap: 1.5, mt: 4, flexWrap: 'wrap' }}>
        {previewImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              height: isModal ? '220px' : '130px',
              width: isModal ? '100%' : '150px',
            }}
          >
            <Image
              src={URL.createObjectURL(image)}
              alt="preview-image"
              fill
              sizes="100%"
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
        <Styles.ImagePlaceHolder
          component="label"
          onChange={imageChangeHandler}
          modal={+isModal}
        >
          <ImageIcon color="primary" fontSize="large" />
          <Text variant="body" fontWeight={500} color="text.secondary">
            Attach Image.
          </Text>
          <Input
            type="file"
            inputProps={{ multiple: true, accept: allowedImageTypes.join(', ') }}
            sx={{ display: 'none' }}
          />
        </Styles.ImagePlaceHolder>
        <PrimaryButton
          type="submit"
          disabled={formik.isSubmitting}
          sx={{
            ml: 'auto',
            position: isModal && 'absolute',
            bottom: isModal && 20,
            right: isModal && 30,
          }}
        >
          <Text variant="body">{isModal ? 'Update' : 'Post Review'}</Text>
        </PrimaryButton>
      </FlexContainer>
    </Box>
  );
};

export default AddReview;
