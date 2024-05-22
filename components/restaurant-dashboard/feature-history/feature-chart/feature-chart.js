import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

// Styles
import * as Styles from './feature-chart.styles';
import { DashboardContent, Text } from '@/components/UI';
import { Box } from '@mui/material';

// Chart
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

// Utils
import { Periods } from '@/utils/constants';
import { enqueueSnackbar } from 'notistack';
import { getError } from '@/helpers/snackbarHelpers';
import { getRestaurantReview } from '@/services/review';
import { useRestaurantContext } from '@/context/restaurant';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FeatureChart = ({ plans }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(1);
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

  const filterReviewsByDateRange = (reviews) => {
    const currentDate = dayjs();
    const filteredReviews = reviews.filter((review) => {
      const reviewDate = dayjs(review.createdAt);
      return reviewDate.isAfter(currentDate.subtract(selectedPeriod, 'month'));
    });
    return filteredReviews;
  };

  const fiteredReviews = filterReviewsByDateRange(reviews);

  const featurePeriods = plans.map((plan) => {
    const start = dayjs(plan.createdAt).format('DD MMMM YYYY');
    const end = dayjs(plan.createdAt)
      .add(plan.planId.durationInMonths, 'month')
      .format('DD MMMM YYYY');
    return { start, end };
  });

  const occurrencesCount = (filteredReviews) => {
    const dayOccurrences = {};

    filteredReviews.forEach((review) => {
      const day = dayjs(review.createdAt).locale('en').format('DD MMMM YYYY');
      const type = 'review';

      if (!dayOccurrences[day]) {
        dayOccurrences[day] = {
          review: 0,
          featured: featurePeriods.some((item) =>
            dayjs(day).isBetween(item.start, item.end, 'day')
          ),
        };
      }

      dayOccurrences[day][type]++;
    });

    return dayOccurrences;
  };

  const occurrences = occurrencesCount(fiteredReviews);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    parsing: {
      xAxisKey: 'featured',
      yAxisKey: 'review',
    },
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
    labels: Object.keys(occurrences),
    datasets: [
      {
        label: 'Review Posted',
        data: Object.values(occurrences),
        backgroundColor: (ctx) => {
          if (ctx.raw?.featured) return 'green';
          else return 'orange';
        },
        pointBorderColor: (ctx) => {
          if (ctx.raw?.featured) return 'green';
          else return 'orange';
        },
        segment: {
          borderColor: (ctx) => {
            if (ctx.p1.raw.featured) return 'green';
            else return 'orange';
          },
        },
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
        <Line data={data} options={options} />
      </Box>
    </DashboardContent>
  );
};

export default FeatureChart;
