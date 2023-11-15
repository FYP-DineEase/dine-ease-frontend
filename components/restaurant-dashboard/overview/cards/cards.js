import React from 'react';

//Styles
import { DashboardContent, FlexContainer, Text } from '@/components/UI';
import { Card, CardContent } from '@mui/material';

import { Home } from '@mui/icons-material';

const Cards = () => {
  const statistics = [
    {
      icon: <Home fontSize="large" />,
      text: 'Reviews',
      content: 120,
      backgroundColor: '#F78C8C',
    },
    {
      icon: <Home fontSize="large" />,
      text: 'Rating',
      content: 3,
      backgroundColor: '#FAFAA5',
    },
    {
      icon: <Home fontSize="large" />,
      text: 'Reviews',
      content: 120,
      backgroundColor: '#90FC97',
    },
    {
      icon: <Home fontSize="large" />,
      text: 'Rating',
      content: 5,
      backgroundColor: '#EA90FC',
    },
  ];

  return (
    <DashboardContent>
      <FlexContainer gap={1.5} flexWrap="wrap">
        {statistics.map((item, index) => (
          <Card
            sx={{ backgroundColor: item.backgroundColor, width: '190px' }}
            key={index}
          >
            <CardContent>
              <FlexContainer
                sx={{
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {item.icon}
                <Text variant="subHeader">{item.content}</Text>
                <Text variant="body" fontWeight={500}>
                  {item.text}
                </Text>
              </FlexContainer>
            </CardContent>
          </Card>
        ))}
      </FlexContainer>
    </DashboardContent>
  );
};

export default Cards;
