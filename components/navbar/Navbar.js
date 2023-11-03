import React, { useState } from "react";
import Link from "next/link";

// components
import Logo from "../logo/logo";

// styles
import { Text } from "../UI";
import * as Styles from "./Navbar.styles";
import NavbarDrawer from "./NavbarDrawer";

//Icons
import { Home } from "@mui/icons-material";

const Navbar = () => {
  const navLinks = [
    { id: "Home", link: "/", icon: <Home /> },
    { id: "Discover", link: "/", icon: <Home /> },
    { id: "Contact", link: "/", icon: <Home /> },
    { id: "About Us", link: "/", icon: <Home /> },
    { id: "Log In", link: "/login", authItem: true, icon: <Home /> },
    {
      id: "Sign Up",
      link: "/signup",
      authItem: true,
      fill: true,
      icon: <Home />,
    },
  ];

  return (
    <Styles.AppBarContainer>
      <Logo />
      <Styles.NavContainer>
        {navLinks.map((item) => (
          <Link key={item.id} href={item.link}>
            {item.authItem ? (
              <Styles.AuthLink fill={item.fill ? 1 : 0}>
                <Text variant="body">{item.id}</Text>
              </Styles.AuthLink>
            ) : (
              <Styles.LinkContainer>
                <Text variant="body">{item.id}</Text>
              </Styles.LinkContainer>
            )}
          </Link>
        ))}
      </Styles.NavContainer>
      <NavbarDrawer navLinks={navLinks} />
    </Styles.AppBarContainer>
  );
};

export default Navbar;
