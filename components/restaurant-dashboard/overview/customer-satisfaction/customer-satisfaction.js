import React from 'react';

//Styles
import { DashboardContent, Text } from '@/components/UI';
import { SatisfactionContainer } from './customer-satisfaction.styles';

//Icons
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import { reviews } from '@/mockData/mockData';

const CustomerSatisfaction = () => {
  const satisfactionMappings = {
    superb: {
      icon: <SentimentVerySatisfiedIcon sx={{ color: 'darkgreen', fontSize: '8rem' }} />,
    },
    good: {
      icon: <SentimentSatisfiedIcon sx={{ color: 'green', fontSize: '8rem' }} />,
    },
    average: {
      icon: <SentimentNeutralIcon sx={{ color: 'yellow', fontSize: '8rem' }} />,
    },
    bad: {
      icon: <SentimentDissatisfiedIcon sx={{ color: 'red', fontSize: '8rem' }} />,
    },
    extremelyBad: {
      icon: <SentimentVeryDissatisfiedIcon sx={{ color: 'darkred', fontSize: '8rem' }} />,
    },
  };

  const getSatisfactionDetails = (satisfactionPercentage) => {
    let satisfactionType;

    if (satisfactionPercentage >= 80) satisfactionType = 'superb';
    else if (satisfactionPercentage >= 60) satisfactionType = 'good';
    else if (satisfactionPercentage >= 40) satisfactionType = 'average';
    else if (satisfactionPercentage >= 20) satisfactionType = 'bad';
    else satisfactionType = 'extremelyBad';

    return satisfactionMappings[satisfactionType];
  };

  const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRatings / reviews.length;

  const satisfactionPercentage = (averageRating / 5) * 100;
  const { icon } = getSatisfactionDetails(satisfactionPercentage);

  return (
    <DashboardContent height="100%">
      <SatisfactionContainer>
        {icon}
        <Text variant="header" fontWeight={800}>
          {`${satisfactionPercentage.toFixed(0)}%`}
        </Text>
        <Text variant="body">
          of customers are satisfied with their dining experience
        </Text>
      </SatisfactionContainer>
    </DashboardContent>
  );
};

export default CustomerSatisfaction;
