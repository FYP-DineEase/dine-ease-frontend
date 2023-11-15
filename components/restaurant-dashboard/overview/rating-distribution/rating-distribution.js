import React from 'react';

//Styles
import { Box } from '@mui/material';
import { DashboardContent } from '@/components/UI';

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

import { reviews } from '@/mockData/mockData';

const RatingDistribution = () => {
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
        // position: 'top',
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
        display: true,
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
      },
    ],
  };

  return (
    <DashboardContent>
      <Box sx={{ height: '300px' }}>
        <Bar data={data} options={options} />
      </Box>
    </DashboardContent>
  );
};

export default RatingDistribution;
