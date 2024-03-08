import React from 'react';

// Styles
import { Box } from '@mui/material';
import { DashboardContent } from '@/components/UI';

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

const ReviewSentimentChart = ({ reviews }) => {
  const dummyReviews = reviews.map((review) => ({
    ...review,
    sentiment: review.rating > 2.5 ? 'positive' : 'negative',
  }));

  const countByType = dummyReviews.reduce((acc, review) => {
    acc[review.sentiment] = (acc[review.sentiment] || 0) + 1;
    return acc;
  }, {});

  console.log(countByType);

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
    labels: ['Positive Reviews', 'Negative Reviews'],
    datasets: [
      {
        label: 'Number of Records',
        data: Object.values(countByType).reverse(),
        backgroundColor: ['orange', 'red'],
      },
    ],
  };
  return (
    <DashboardContent>
      <Box sx={{ height: '290px' }}>
        <Pie data={data} options={options} />
      </Box>
    </DashboardContent>
  );
};

export default ReviewSentimentChart;
