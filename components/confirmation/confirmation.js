import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Styles
import { Box } from "@mui/material";
import { SecondaryContainer, Text } from "../UI";

const Confirmation = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <SecondaryContainer gap={1}>
      <Image src={"/assets/images/food.svg"} width={500} height={500} alt="login-image" />
      <Text variant="header">Email Verification Sent</Text>
      <Box sx={{ m: "auto", width: "80%", mt: 4, textAlign: "center" }}>
        <Text variant="subHeader">
          Thank you for registering on DineEase. We have sent email to
          <Text variant="subHeader" fontWeight={800} mr={1}>
            {email}
          </Text>
          , to complete the registration process, please verify your email address.
        </Text>
      </Box>
    </SecondaryContainer>
  );
};

export default Confirmation;
