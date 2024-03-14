import React, { useState } from 'react';
import dayjs from 'dayjs';

//Styles
import * as Styles from './review-sentiment-chart.styles';
import { Box } from '@mui/material';
import { DashboardContent, Text } from '@/components/UI';

// Utils
import { Periods } from '@/utils/constants';

// Chart
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReviewSentimentChart = ({ mixedReviews, reviewsType }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(1);

  const dummyReviews = mixedReviews.map((review) => ({
    ...review,
    type: review.rating > 2.5 ? 'positive' : 'negative',
  }));

  const reviews = dummyReviews.filter((review) => review.type === reviewsType);

  const filterReviewsByDateRange = (reviews) => {
    const currentDate = dayjs();
    const filteredReviews = reviews.filter((review) => {
      const reviewDate = dayjs(review.createdAt);
      return reviewDate.isAfter(currentDate.subtract(selectedPeriod, 'month'));
    });
    return filteredReviews;
  };

  const filteredReviews = filterReviewsByDateRange(reviews);

  const occurrencesCount = (filteredReviews) => {
    const dayOccurrences = {};

    filteredReviews.forEach((review) => {
      const day = dayjs(review.createdAt).locale('en').format('DD MMMM YYYY');
      const type = review.type;

      if (!dayOccurrences[day]) {
        dayOccurrences[day] = {
          [reviewsType]: 0,
        };
      }

      dayOccurrences[day][type]++;
    });

    return dayOccurrences;
  };

  const occurrences = occurrencesCount(filteredReviews);

  const sortedOccurences = Object.keys(occurrences)
    .map((date) => ({
      date: dayjs(date, 'DD MMMM'),
      value: occurrences[date],
    }))
    .sort((a, b) => a.date - b.date)
    .reduce((acc, curr) => {
      const formattedDate = curr.date.format('DD MMMM YYYY');
      acc[formattedDate] = curr.value;
      return acc;
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
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 5,
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
    labels: Object.keys(sortedOccurences),
    datasets: [
      {
        label: `${reviewsType} Reviews`,
        data: Object.values(sortedOccurences).map(
          (occurrence) => occurrence[reviewsType]
        ),
        backgroundColor: 'orange',
        borderColor: 'orange',
        cubicInterpolationMode: 'monotone',
      },
    ],
  };

  return (
    <DashboardContent>
      <Styles.OptionContainer>
        {Periods.map((period) => (
          <Styles.Option
            key={period.id}
            selected={period.value === selectedPeriod}
            onClick={() => setSelectedPeriod(period.value)}
          >
            <Text variant="sub" fontWeight={600}>
              {period.id}
            </Text>
          </Styles.Option>
        ))}
      </Styles.OptionContainer>
      <Box sx={{ height: '280px' }}>
        <Bar data={data} options={options} />
      </Box>
    </DashboardContent>
  );
};

export default ReviewSentimentChart;
