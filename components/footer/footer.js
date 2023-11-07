import React from "react";
import Link from "next/link";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

//Styles
import { Divider, Grid } from "@mui/material";
import { RightContainer, SocialContainer } from "./Footer.styles";
import { FlexContainer, PrimaryText, Text } from "../UI";

import Logo from "../logo/logo";

const Footer = () => {
  return (
    <Grid container justifyContent="center" rowGap={5} paddingBottom={5}>
      <Grid item xs={12}>
        <Divider sx={{ backgroundColor: "main.primary" }} variant="middle" />
      </Grid>
      <Grid item lg={3} xs={10} textAlign="center">
        <Logo />
        <Text variant="body">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </Text>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ order: { xs: "1", lg: "0" } }}>
        <RightContainer>
          <Text variant="body">
            Copyright ©2023 All rights reserved by
            <PrimaryText variant="body" ml={1}>DineEase</PrimaryText>
          </Text>
        </RightContainer>
      </Grid>
      <Grid item xs={12} lg={3}>
        <SocialContainer>
          <PrimaryText sx={{ fontWeight: 800 }} variant="body">
            Connect With Us
          </PrimaryText>
          <FlexContainer gap={1}>
            <Link href="/">
              <FacebookIcon sx={{ fontSize: 30 }} />
            </Link>
            <Link href="/">
              <TwitterIcon sx={{ fontSize: 30 }} />
            </Link>
            <Link href="/">
              <InstagramIcon sx={{ fontSize: 30 }} />
            </Link>
          </FlexContainer>
        </SocialContainer>
      </Grid>
    </Grid>
  );
};

export default Footer;

