import React, { useEffect, useState } from 'react';

// Styles
import { DetailsContainer, FlexContainer, Text } from '@/components/UI';
import { Box } from '@mui/material';

// Icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

// Services
import { getUserReview } from '@/services/review';

// Snackbar
import { enqueueSnackbar } from 'notistack';

// Helpers
import { getError } from '@/helpers/snackbarHelpers';

// Chart
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

const ReviewsGraph = ({ profileDetails }) => {
  const [reviews, setReviews] = useState([]);

  const fetchUserReviews = async () => {
    try {
      const response = await getUserReview(profileDetails.id);
      setReviews(response.data);
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  useEffect(() => {
    if (profileDetails?.id) fetchUserReviews();
  }, [profileDetails?.id]);

  const ratings = reviews.map((review) => review.rating);

  const ratingCounts = Array.from(
    { length: 5 },
    (_, index) => ratings.filter((rating) => rating === index + 1).length
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Total Ratings Distribution',
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: false,
      },
    },
  };

  const labels = ['5', '4', '3', '2', '1'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Number Of Ratings',
        data: ratingCounts.reverse(),
        backgroundColor: 'orange',
        barBorderRadius: 5,
      },
    ],
  };

  return (
    <DetailsContainer>
      <Box sx={{ height: '290px' }}>
        <Bar data={data} options={options} />
      </Box>
      <Box mt={3}>
        <Text variant="subHeader" fontWeight={500}>
          Reviews Sentiment
        </Text>
        <FlexContainer gap={7} mt={2}>
          <Box>
            <ThumbUpIcon sx={{ fontSize: '3.5rem' }} color="primary" />
            <Text
              variant="body"
              sx={{ display: 'block', textAlign: 'center', fontWeight: 500 }}
            >
              23
            </Text>
          </Box>
          <Box>
            <ThumbDownIcon sx={{ fontSize: '3.5rem' }} color="error" />
            <Text
              variant="body"
              sx={{ display: 'block', textAlign: 'center', fontWeight: 500 }}
            >
              4
            </Text>
          </Box>
        </FlexContainer>
      </Box>
    </DetailsContainer>
  );
};

export default ReviewsGraph;
