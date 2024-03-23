import React from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './favourite-restaurants.styles';
import { FlexContainer, Text } from '@/components/UI';
import { Box, Divider, Rating, useMediaQuery } from '@mui/material';

const FavouriteRestaurants = ({ restaurants, flyToLocation }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const locationUpdateHandler = (coordinates) => {
    flyToLocation(coordinates[0], coordinates[1]);
  };

  return (
    <Styles.ListContainer>
      {restaurants.map((restaurant, index) => (
        <Box
          onClick={() => locationUpdateHandler(restaurant.location.coordinates)}
          key={index}
        >
          <Styles.RestaurantImage>
            <Image
              src={
                //   (details.cover &&
                //     getFileUrl(
                //       process.env.NEXT_PUBLIC_AWS_S3_RESTAURANTS_BUCKET,
                //       `${details.id}/cover/${details.cover}`
                //     )) ||
                '/assets/images/bg-placeholder.png'
              }
              alt="restaurant"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
          </Styles.RestaurantImage>
          <FlexContainer sx={{ gap: 6, mt: 2 }}>
            <Text variant={isMobile ? 'body' : 'subHeader'} fontWeight={500}>
              {restaurant.name}
            </Text>
            <Rating
              value={restaurant.rating}
              readOnly
              precision={0.5}
              size={isMobile ? 'small' : 'medium'}
            />
          </FlexContainer>
          {!isMobile && <Divider variant="middle" flexItem sx={{ mt: 3, mb: 3 }} />}
        </Box>
      ))}
    </Styles.ListContainer>
  );
};

export default FavouriteRestaurants;
