import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Services
import { verifyAccount } from "@/services";

// Snackbar
import { enqueueSnackbar } from "notistack";
import { getError } from "@/helpers/snackbarHelpers";

// Styles
import { SecondaryContainer, Text } from "../UI";

const Verification = () => {
  const router = useRouter();
  const { token } = router.query;

  const navigateToLogin = () => {
    router.push(`/login`, null, { shallow: true });
  };

  useEffect(() => {
    console.log("hello");
    if (!router.isReady) return;
    if (!token) {
      navigateToLogin();
      return;
    }

    (async () => {
      try {
        const res = await verifyAccount(token);
        enqueueSnackbar({
          variant: "success",
          message: res.data,
          onExited: navigateToLogin,
        });
      } catch (e) {
        enqueueSnackbar({ variant: "error", message: getError(e) });
      }
    })();

    // eslint-disable-next-line
  }, [token]);

  return (
    <SecondaryContainer gap={1}>
      <Image src={"/assets/images/food.svg"} width={500} height={500} alt="login-image" />
      <Text variant="header">Verifying Your Account</Text>
      <Text variant="subHeader" fontWeight={800} mr={1}>
        Please wait
      </Text>
    </SecondaryContainer>
  );
};

export default Verification;
