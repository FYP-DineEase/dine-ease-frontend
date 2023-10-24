import React, { useState } from "react";
import Link from "next/link";

// components
import Logo from "../logo/logo";

// styles
import { Text } from "../UI/typography";
import * as Styles from "./navbar.styles";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navLinks = [
    { id: "Home", link: "/" },
    { id: "Discover", link: "/" },
    { id: "Contact", link: "/" },
    { id: "Log In", link: "/", authItem: true },
    { id: "Sign Up", link: "/", authItem: true, fill: true },
  ];

  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <Styles.MainContainer>
      <Logo />
      <Styles.NavContainer>
        {navLinks.map((item) => (
          <Link key={item.id} href={item.link}>
            {item.authItem ? (
              <Styles.AuthLink fill={item.fill ? 1 : 0}>
                <Text variant="main">{item.id}</Text>
              </Styles.AuthLink>
            ) : (
              <Styles.LinkContainer>
                <Text variant="main">{item.id}</Text>
              </Styles.LinkContainer>
            )}
          </Link>
        ))}
      </Styles.NavContainer>
    </Styles.MainContainer>
  );
};

export default Navbar;
