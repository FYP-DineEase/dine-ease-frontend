import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import { Avatar, Box, Container, Divider, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import { FooterLinksContainer } from "./Footer.styles";

const Footer = () => {
  return (
    <Container disableGutters maxWidth="false" sx={{ minHeight: "325px" }}>
      <Divider sx={{ backgroundColor: "darkorange" }} variant="middle" />
      <Container
        maxWidth="xl"
        sx={{ height: "100%", padding: "5rem 3rem 2rem 2rem" }}
        disableGutters
      >
        <Grid container rowSpacing={10} justifyContent="center">
          <Grid item xs={10} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Avatar sx={{ height: "50px", width: "50px" }} />
                <ResponsiveText
                  variant="subHeader"
                  sx={{ fontWeight: "bold", color: "darkorange" }}
                >
                  DineEase
                </ResponsiveText>
              </Box>
              <Box sx={{ width: { xs: "100%", md: "80%" } }}>
                <ResponsiveText variant="body">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. A small river named Duden flows
                  by their place and supplies it with the necessary regelialia.
                </ResponsiveText>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Box sx={{ padding: "0 7vw" }}>
                <ResponsiveText
                  variant="body"
                  sx={{ fontWeight: "bold", color: "darkorange" }}
                >
                  Quick Links
                </ResponsiveText>
              </Box>
              <FooterLinksContainer>
                <ResponsiveText variant="body">Home</ResponsiveText>
                <ResponsiveText variant="body">About</ResponsiveText>
                <ResponsiveText variant="body">Contact Us</ResponsiveText>
              </FooterLinksContainer>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Box sx={{ padding: "0 6vw" }}>
                <ResponsiveText
                  variant="body"
                  sx={{ fontWeight: "bold", color: "darkorange" }}
                >
                  Connect With Us
                </ResponsiveText>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  padding: "0 7vw",
                  gap: "0.5rem",
                }}
              >
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box textAlign="center">
              <ResponsiveText variant="body">
                Copyright ©2023 All rights reserved | This template is made with
                by Colorlib
              </ResponsiveText>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Footer;
