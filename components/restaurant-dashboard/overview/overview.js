import React from 'react';

//Styles
import { Grid } from '@mui/material';
import { DashboardContainer } from '@/components/UI';

//Components
import Cards from './cards/cards';
import RatingDistribution from './rating-distribution/rating-distribution';
import ReviewTrend from './review-trend/review-trend';
import CustomerSatisfaction from './customer-satisfaction/customer-satisfaction';
import RecentReviews from './recent-reviews/recent-reviews';

const Overview = () => {
  return (
    <DashboardContainer container columnSpacing={2} rowGap={1}>
      <Grid item xs={12} lg={7}>
        <Cards />
      </Grid>
      <Grid item xs={12} lg={5}>
        <CustomerSatisfaction />
      </Grid>
      <Grid item xs={12} lg={7}>
        <ReviewTrend />
      </Grid>
      <Grid item xs={12} lg={5}>
        <RatingDistribution />
      </Grid>
      <Grid item xs={12}>
        <RecentReviews />
      </Grid>
    </DashboardContainer>
  );
};

export default Overview;
