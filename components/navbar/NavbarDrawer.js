import React, { useState } from "react";
import Link from "next/link";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { FlexContainer, Text } from "../UI";

import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../logo/logo";

import * as Styles from "./Navbar.styles";

const NavbarDrawer = ({ navLinks }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleNavDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={handleNavDrawer}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <MenuIcon sx={{ color: "main.secondary", fontSize: 25 }} />
      </IconButton>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: "60vw",
          },
        }}
        anchor="right"
        open={showDrawer}
        onClose={handleNavDrawer}
      >
        <Box sx={{ mt: 7 }}>
          <Logo size="header" />
        </Box>
        <List sx={{ mt: 3 }}>
          {navLinks.map(
            (item) =>
              !item.authItem && (
                <Link key={item.id} href={item.link}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        sx={{ color: "main.secondary" }}
                        primary={item.id}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              )
          )}
        </List>
        <Divider orientation="horizontal" variant="middle" />
        <FlexContainer gap={1} mt={2}>
          {navLinks.map(
            (item) =>
              item.authItem && (
                <Link key={item.id} href={item.link}>
                  <Styles.AuthLink fill={item.fill ? 1 : 0}>
                    <Text variant="body">{item.id}</Text>
                  </Styles.AuthLink>
                </Link>
              )
          )}
        </FlexContainer>
      </Drawer>
    </React.Fragment>
  );
};

export default NavbarDrawer;
