import React, { useEffect, useState } from 'react';
import { useRestaurantContext } from '@/context/restaurant';

//Styles
import { DashboardContainer } from '@/components/UI';
import { Grid } from '@mui/material';

// Helpers
import { getError } from '@/helpers/snackbarHelpers';

// Services
import { getRestaurantReview } from '@/services/review';

// Snackbar
import { enqueueSnackbar } from 'notistack';

// Component
import ReviewsTable from './reviews-table/reviews-table';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { details } = useRestaurantContext();

  const fetchReviews = async () => {
    try {
      const response = await getRestaurantReview(details.id);
      setReviews(response.data.reviews);
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  useEffect(() => {
    if (details.id) fetchReviews();
  }, [details.id]);

  return (
    <DashboardContainer container columnSpacing={2} rowGap={1}>
      {/* <Grid item xs={12}>
        <ReviewChart reviews={reviews} />
      </Grid> */}
      <Grid item xs={12}>
        <ReviewsTable reviews={reviews} />
      </Grid>
    </DashboardContainer>
  );
};

export default Reviews;
