import React, { useEffect, useState } from 'react';

import { useRestaurantContext } from '@/context/restaurant';

// Styles
import { Box, Grid, Rating } from '@mui/material';
import { FlexContainer, Text } from '@/components/UI';

//Chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Snackbar
import { enqueueSnackbar } from 'notistack';

// Helpers
import { getError } from '@/helpers/snackbarHelpers';

// Services
import { getRestaurantReview } from '@/services/review';

const RatingChart = ({ restaurant }) => {
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

  const ratings = reviews.map((review) => review.rating);

  const ratingCounts = Array.from(
    { length: 5 },
    (_, index) => ratings.filter((rating) => rating === index + 1).length
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ['5', '4', '3', '2', '1'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: ratingCounts.reverse(),
        backgroundColor: 'orange',
        barBorderRadius: 30,
      },
    ],
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={4}>
        <FlexContainer sx={{ flexDirection: 'column', gap: 1.5, height: '100%' }}>
          <Text variant="body" fontWeight={600}>
            Average Rating
          </Text>
          <Rating
            name="rating"
            readOnly
            value={restaurant.rating}
            precision={0.5}
            size="large"
          />
          <Text variant="body">{restaurant.count} Reviews</Text>
        </FlexContainer>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ height: '200px' }}>
          <Bar data={data} options={options} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default RatingChart;
