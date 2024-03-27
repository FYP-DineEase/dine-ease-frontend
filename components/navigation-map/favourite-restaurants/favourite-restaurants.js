import React from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './favourite-restaurants.styles';
import { FlexContainer, Text } from '@/components/UI';
import { Divider, Rating, useMediaQuery } from '@mui/material';

// Helpers
import { getFileUrl } from '@/helpers/fileHelpers';

const FavouriteRestaurants = ({ restaurants, flyToLocation }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const locationUpdateHandler = (coordinates) => {
    flyToLocation(coordinates[0], coordinates[1]);
  };

  return (
    <Styles.ListContainer>
      {restaurants.map((restaurant, index) => (
        <Styles.Restaurant
          onClick={() => locationUpdateHandler(restaurant.location.coordinates)}
          key={index}
        >
          <Styles.RestaurantImage>
            <Image
              src={
                (restaurant.cover &&
                  getFileUrl(
                    process.env.NEXT_PUBLIC_AWS_S3_RESTAURANTS_BUCKET,
                    `${restaurant.id}/cover/${restaurant.cover}`
                  )) ||
                '/assets/images/bg-placeholder.png'
              }
              alt="restaurant"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', borderRadius: '5px' }}
            />
          </Styles.RestaurantImage>
          <FlexContainer sx={{ justifyContent: 'space-between', mt: 2 }}>
            <Text variant="main" fontWeight={500}>
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
        </Styles.Restaurant>
      ))}
    </Styles.ListContainer>
  );
};

export default FavouriteRestaurants;
