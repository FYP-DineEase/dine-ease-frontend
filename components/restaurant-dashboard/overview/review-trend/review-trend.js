import React from 'react';

//Styles
import { Box } from '@mui/material';
import { DashboardContent, Text } from '@/components/UI';

//Chart
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ReviewTrend = ({ reviews }) => {
  const currentDate = new Date();

  const lastMonthReviews = reviews.filter((review) => {
    const createdAt = new Date(review.createdAt);
    return (
      createdAt.getMonth() === currentDate.getMonth() - 2 &&
      createdAt.getFullYear() === currentDate.getFullYear()
    );
  });

  const reviewsCountByDay = Array.from({ length: 31 }, () => 0);

  lastMonthReviews.forEach((review) => {
    const createdAt = new Date(review.createdAt);
    const day = createdAt.getDate() - 1;
    reviewsCountByDay[day]++;
  });

  const dayLabels = Array.from({ length: 31 }, (_, index) => {
    const dayOfMonth = index + 1;
    const formattedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 2,
      dayOfMonth
    ).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
    return formattedDate;
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        // position: 'top',
      },
      title: {
        display: true,
        text: 'Last Month Review Trend',
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 10,
        },
        display: true,
      },
      y: {
        ticks: {
          stepSize: 1,
        },
        display: true,
      },
    },
  };

  const data = {
    labels: dayLabels,
    datasets: [
      {
        label: 'Number of Reviews',
        data: reviewsCountByDay,
        backgroundColor: 'orange',
        cubicInterpolationMode: 'monotone',
      },
    ],
  };

  return (
    <DashboardContent>
      <Box sx={{ height: '300px' }}>
        <Line data={data} options={options} />
      </Box>
    </DashboardContent>
  );
};

export default ReviewTrend;
