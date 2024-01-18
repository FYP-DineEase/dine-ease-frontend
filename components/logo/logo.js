import React from 'react';
import Link from 'next/link';
import * as Styles from './logo.styles';

const Logo = ({
  color = 'primary',
  size = 'header',
  isNavigate = false,
  isHide = false,
}) => {
  return (
    <Link href={isNavigate ? '/' : ''}>
      <Styles.LogoContainer color={color}>
        <Styles.Logo variant={size} />
        <Styles.LogoText variant={size} isHide={+isHide}>
          DineEase
        </Styles.LogoText>
      </Styles.LogoContainer>
    </Link>
  );
};

export default Logo;
