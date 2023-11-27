import React, { useContext } from 'react';
import ProfileContext from '@/store/profile-context/profile-context';

//Form
import { useFormik } from 'formik';
import { profileSchema } from '@/utils/validation-schema/profile';

//Styles
import * as Styles from './profile-details-modal.styles';
import { IconButton, Modal } from '@mui/material';
import { FlexContainer, InputField, PrimaryButton, Text } from '@/components/UI';

//Icons
import CloseIcon from '@mui/icons-material/Close';

const ProfileDetailsModal = ({ showModal, handleShowModal }) => {
  const ProfileCtx = useContext(ProfileContext);
  const { firstName, lastName, description } = ProfileCtx.profileDetails;

  const submitHandler = async (values) => {
    formik.setSubmitting(true);
    ProfileCtx.profileDetailsHandler(values);
    formik.setSubmitting(false);
    handleShowModal();
  };

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      description: description,
    },
    validationSchema: profileSchema,
    onSubmit: submitHandler,
  });

  return (
    <Modal open={showModal} onClose={handleShowModal}>
      <Styles.ModalContainer component="form" onSubmit={formik.handleSubmit}>
        <IconButton
          sx={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={handleShowModal}
        >
          <CloseIcon color="secondary" fontSize="medium" />
        </IconButton>
        <Text variant="subHeader" fontWeight={800} mb={1.5}>
          Update Profile
        </Text>
        <FlexContainer gap={2}>
          <InputField
            name="firstName"
            label="First Name"
            variant="outlined"
            placeholder="Enter First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.firstName && Boolean(formik.touched.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <InputField
            name="lastName"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.lastName && Boolean(formik.touched.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </FlexContainer>
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
          rows={4}
        />
        <PrimaryButton type="submit" disabled={formik.isSubmitting}>
          <Text variant="body">Save Changes</Text>
        </PrimaryButton>
      </Styles.ModalContainer>
    </Modal>
  );
};

export default ProfileDetailsModal;
