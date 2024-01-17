import React from 'react';
import Link from 'next/link';

// styles
import { Text } from '../UI';
import * as Styles from './logo.styles';

const Logo = ({ color = 'primary', size = 'header' }) => {
  return (
    <Link href="/">
      <Styles.LogoContainer color={color}>
        <Styles.Logo variant={size} />
        <Text variant={size}>DineEase</Text>
      </Styles.LogoContainer>
    </Link>
  );
};

export default Logo;
