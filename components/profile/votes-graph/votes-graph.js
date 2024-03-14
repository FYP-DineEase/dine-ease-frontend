import React, { useEffect, useState } from 'react';

// Styles
import { Box } from '@mui/material';
import { DetailsContainer } from '@/components/UI';

// Helpers
import { getError } from '@/helpers/snackbarHelpers';

// Snackbar
import { enqueueSnackbar } from 'notistack';

// Services
import { getUserReview } from '@/services/review';

// Utils
import { VoteTypes } from '@/utils/constants';

// Chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
import { Pie } from 'react-chartjs-2';

const VotesGraph = ({ profileDetails }) => {
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

  const countByType = reviews.reduce((accumulator, review) => {
    review.votes.forEach((vote) => {
      if (accumulator[vote.type]) {
        accumulator[vote.type]++;
      } else {
        accumulator[vote.type] = 1;
      }
    });
    return accumulator;
  }, {});

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: false,
        text: 'Listing',
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 10,
        },
        display: false,
      },
      y: {
        ticks: {
          stepSize: 1,
        },
        display: false,
      },
    },
  };

  const data = {
    labels: [
      VoteTypes.COOL,
      VoteTypes.USEFUL,
      VoteTypes.FUNNY,
      VoteTypes.LIKE,
      VoteTypes.DISLIKE,
    ],
    datasets: [
      {
        label: 'Number of Records',
        data: [
          countByType[VoteTypes.COOL],
          countByType[VoteTypes.USEFUL],
          countByType[VoteTypes.FUNNY],
          countByType[VoteTypes.LIKE],
          countByType[VoteTypes.DISLIKE],
        ],
        backgroundColor: ['orange', 'red', 'blue', 'purple', 'yellow'],
      },
    ],
  };
  return (
    <DetailsContainer>
      <Box sx={{ height: '400px' }}>
        <Pie data={data} options={options} />
      </Box>
    </DetailsContainer>
  );
};

export default VotesGraph;
