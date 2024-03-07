import React from 'react';

import { useRestaurantContext } from '@/context/restaurant';

// Styles
import * as Styles from './reviews.styles';
import { Grid } from '@mui/material';
import { SectionContainer, Text } from '@/components/UI';

// Components
import RatingChart from '../rating-chart/rating-chart';
import Review from '@/components/reviews/review';
import AddReview from '../add-review/add-review';

const RestaurantReviews = ({ restaurant }) => {
  const { details } = useRestaurantContext();

  return (
    <SectionContainer container>
      <Grid item xs={12}>
        <Styles.Header>
          <Text variant="subHeader" color="primary" fontWeight={500}>
            Customer Experiences.
          </Text>
          <Text variant="header" fontWeight={800}>
            Reviews
          </Text>
        </Styles.Header>
      </Grid>
      <Grid item xs={12} md={8}>
        <AddReview />
      </Grid>
      <Grid item xs={12} md={8} sx={{ mb: 4, mt: 4 }}>
        <RatingChart restaurant={restaurant} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Review restaurantDetails={details} />
      </Grid>
    </SectionContainer>
  );
};

export default RestaurantReviews;
