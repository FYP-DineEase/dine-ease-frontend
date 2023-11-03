import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Styles
import { Grid } from "@mui/material";
import { SecondaryContainer, Text } from "../UI";

const Confirmation = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <SecondaryContainer container sx={{ height: "70%" }}>
      <Grid item xs={12} sx={{ position: "relative", height: "70%" }}>
        <Image
          src={"/assets/images/food.svg"}
          fill={true}
          sizes="100vw"
          alt="login-image"
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Text variant="header">Email Verification Sent</Text>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
        <Text variant="subHeader">
          Thank you for registering on DineEase. We have sent email to
          <Text variant="subHeader" fontWeight={800} mr={1}>
            {email}
          </Text>
          , to complete the registration process, please verify your email
          address.
        </Text>
      </Grid>
    </SecondaryContainer>
  );
};

export default Confirmation;
