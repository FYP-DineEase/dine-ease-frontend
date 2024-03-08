import React from 'react';

//Styles
import { Box } from '@mui/material';
import { DashboardContent } from '@/components/UI';

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

const ReviewSentimentChart = ({ reviews }) => {
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
        text: 'Postive Review',
      },
    },
    scales: {
      x: {
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
    labels: [],
    datasets: [
      {
        label: 'Number of Reviews',
        data: [],
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

export default ReviewSentimentChart;
