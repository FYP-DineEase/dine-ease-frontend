import React from 'react';
import Image from 'next/image';
import { BannerContainer } from './banner.styles';

const Banner = () => {
  return (
    <BannerContainer>
      <Image
        src={'/assets/images/background.jpg'}
        fill={true}
        objectFit="cover"
        alt="profile-background"
      />
    </BannerContainer>
  );
};

export default Banner;
