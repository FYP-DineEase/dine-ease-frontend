import React from 'react';
import Link from 'next/link';

// components
import Logo from '../logo/logo';

// Styles
import { Text } from '../UI';
import * as Styles from './navbar.styles';
import NavbarDrawer from './drawer/drawer';

const Navbar = () => {
  const navLinks = [
    { id: 'Home', link: '/' },
    { id: 'Discover', link: '/' },
    { id: 'About Us', link: '/' },
    { id: 'Log In', link: '/login', authItem: true },
    {
      id: 'Sign Up',
      link: '/signup',
      authItem: true,
      fill: true,
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
