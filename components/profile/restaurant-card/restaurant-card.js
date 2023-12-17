import React from 'react';
import Image from 'next/image';

// Styles
import * as Styles from './restaurant-card.styles';
import { Card, CardMedia, Chip, Grid } from '@mui/material';
import { PrimaryButton, Text } from '@/components/UI';

// Icons
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationIcon from '@mui/icons-material/LocationOn';

import image from '@/public/assets/images/avatar.jpg';

const RestaurantCard = () => {
const restaurants = [
    {
      image: image,
      listStatus: 'approved',
      featured: false,
      name: 'The Pizza Hut',
      cuisine: ['Italian', 'Mexican', 'Chinese', 'Fast Food'],
      address: 'Plot E-4, Block-B, North Nazimabad / Near Saima Villas',
    },
    {
      image: image,
      listStatus: 'pending',
      featured: true,
      name: 'The Kababjees Restaurant',
      cuisine: ['Italian', 'Mexican'],
      address: 'Plot E-4, Block-B, North Nazimabad',
    },
    {
      image: image,
      listStatus: 'rejected',
      featured: false,
      name: 'Pizzeria',
      cuisine: ['Italian'],
      address: 'Plot E-4, Block-B',
    },
  ];

  const statusColors = {
    approved: 'success',
    rejected: 'error',
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      {restaurants.map((restaurant, index) => (
        <Grid item xs={12} md={12} key={index}>
          <Card
            sx={{
              height: '180px',
              display: 'flex',
            }}
          >
            <CardMedia sx={{ height: '100%', width: '40%', position: 'relative' }}>
              <Image
                src={image}
                alt="menu-item"
                sizes="100vw"
                fill
                style={{ objectFit: 'cover' }}
              />
            </CardMedia>
            <Styles.CardContentContainer>
              <Chip
                label={restaurant.listStatus}
                color={statusColors[restaurant.listStatus] || 'primary'}
                variant="outlined"
                sx={{ position: 'absolute', top: 0, right: 0 }}
              />
              {restaurant.featured && (
                <Chip
                  label={restaurant.featured && 'Featured'}
                  color="secondary"
                  variant="outlined"
                  sx={{ position: 'absolute', top: 35, right: 0 }}
                />
              )}
              <Text variant="main" color="text.secondary" fontWeight={800}>
                {restaurant.name}
              </Text>
              <Styles.IconContainer>
                <RestaurantMenuIcon color="primary" />
                <Text variant="sub" color="text.secondary">
                  {restaurant.cuisine.join(' / ')}
                </Text>
              </Styles.IconContainer>
              <Styles.IconContainer>
                <LocationIcon color="primary" />
                <Text variant="sub" color="text.secondary">
                  {restaurant.address}
                </Text>
              </Styles.IconContainer>
              <PrimaryButton sx={{ position: 'absolute', right: 15, bottom: 10 }}>
                <Text variant="sub" fontWeight={800}>
                  Dashboard
                </Text>
              </PrimaryButton>
            </Styles.CardContentContainer>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RestaurantCard;
