import React from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './banner.styles';
import { Grid, useMediaQuery } from '@mui/material';
import { PaddedButton, SectionContainer, Text } from '@/components/UI';

const Banner = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <SectionContainer container columnSpacing={!isMobile ? 10 : 0}>
      <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 0 } }}>
        <Styles.BannerContent>
          <Text variant="bigHeader" fontWeight={800}>
            Dive into unlimited cuisine options
            <Text variant="bigHeader" color="primary" fontWeight={800} ml={1}>
              DineEase.
            </Text>
          </Text>
          <Text variant="subHeader">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </Text>
          <PaddedButton>
            <Text variant="main" fontWeight={800}>
              Discover Restaurants
            </Text>
          </PaddedButton>
        </Styles.BannerContent>
      </Grid>
      <Styles.BannerImage item xs={12} md={6}>
        <Image
          src={'/assets/images/food.svg'}
          fill={true}
          sizes="100vw"
          alt="login-image"
        />
      </Styles.BannerImage>
    </SectionContainer>
  );
};

export default Banner;
