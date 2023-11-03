import React from "react";
import Image from "next/image";

//Styles
import { IconButton, Modal } from "@mui/material";
import {
  ModalContent,
  PrimaryButton,
  Text,
  VerticalContainer,
} from "@/components/UI";

// Snackbar
import { enqueueSnackbar } from "notistack";
import { getError } from "@/helpers/snackbarHelpers";

import { resendConfirmation } from "@/services";
import CloseIcon from "@mui/icons-material/Close";

const ResendModal = ({ showModal, handleCloseModal, email }) => {
  const resendVerificationHandler = async () => {
    try {
      const res = await resendConfirmation(email);
      console.log(res);
      enqueueSnackbar({
        variant: "success",
        message: res.data,
      });
    } catch (e) {
      enqueueSnackbar({ variant: "error", message: getError(e) });
    } finally {
      handleCloseModal();
    }
  };

  return (
    <Modal open={showModal} onClose={handleCloseModal}>
      <ModalContent height="40vh" width="30vw">
        <VerticalContainer>
          <IconButton onClick={handleClose} sx={{ ml: "auto" }}>
            <CloseIcon sx={{ color: "main.secondary", fontSize: 25 }} />
          </IconButton>
          <Image
            src={"/assets/images/food.svg"}
            height={250}
            width={400}
            alt="login-image"
          />
          <Text variant="body" textAlign="center">
            Oopsie! Your Account is unverified please click the button below to
            resend verification at your email: {email}
          </Text>
          <PrimaryButton sx={{ mt: 4 }} onClick={resendVerificationHandler}>
            <Text variant="body">Resend Link</Text>
          </PrimaryButton>
        </VerticalContainer>
      </ModalContent>
    </Modal>
  );
};

export default ResendModal;
