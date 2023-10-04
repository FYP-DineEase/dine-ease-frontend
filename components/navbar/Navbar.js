import {
  AppBar,
  Avatar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  IconButton,
  useScrollTrigger,
} from "@mui/material";
import React, { useState } from "react";
import {
  NavFullView,
  NavResponsiveView,
  NavbarContainer,
} from "./Navbar.styles";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navLinks = [
    { id: "Home", redirectLink: "/" },
    { id: "About", redirectLink: "/" },
    { id: "Contact Us", redirectLink: "/" },
    { id: "Find Restaurants", redirectLink: "/" },
  ];

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <NavbarContainer className={trigger && "nav-animation"}>
      <NavFullView maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            gap: "0.25rem",
          }}
        >
          <LocalDiningIcon sx={{ fontSize: "50px" }} />
          <Button color="inherit">
            <ResponsiveText variant="mainBody">DineEase</ResponsiveText>
          </Button>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "0.75rem" }}>
          {navLinks.map((link) => (
            <Link href={link.redirectLink} key={link.id}>
              <Button color="inherit">
                <ResponsiveText variant="body">{link.id}</ResponsiveText>
              </Button>
            </Link>
          ))}
          <Divider
            orientation="vertical"
            sx={{
              backgroundColor: !trigger ? "rgba(255, 255, 255, 0.1)" : "white",
            }}
            flexItem
          />
          <Link href="/signup">
            <Button color="inherit">
              <ResponsiveText variant="body">Signup</ResponsiveText>
            </Button>
          </Link>
          <Link href="/login">
            <Button color="inherit">
              <ResponsiveText variant="body">Log In</ResponsiveText>
            </Button>
          </Link>
        </Box>
        <IconButton
          size="large"
          onClick={showNavHandler}
          sx={{ display: { xs: "flex", md: "none" } }}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </NavFullView>
      <Collapse in={showNav} timeout="auto" unmountOnExit>
        <NavResponsiveView>
          {navLinks.map((link) => (
            <Link href={link.redirectLink} key={link.id}>
              <Button color="inherit">
                <ResponsiveText variant="body">{link.id}</ResponsiveText>
              </Button>
            </Link>
          ))}
          <Divider
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            flexItem
          />
          <Box sx={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
            <Link href="/signup">
              <Button color="inherit">
                <ResponsiveText variant="body">Signup</ResponsiveText>
              </Button>
            </Link>
            <Link href="/login">
              <Button color="inherit">
                <ResponsiveText variant="body">Log In</ResponsiveText>
              </Button>
            </Link>
          </Box>
        </NavResponsiveView>
      </Collapse>
      <Divider
        variant="middle"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          display: { xs: "none", md: "flex" },
        }}
      />
    </NavbarContainer>
  );
};

export default Navbar;
