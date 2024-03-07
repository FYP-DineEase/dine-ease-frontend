import React from 'react';

//Styles
import { DashboardContent, FlexContainer, Text } from '@/components/UI';
import { Card, CardContent } from '@mui/material';

import { Home } from '@mui/icons-material';
import { useRestaurantContext } from '@/context/restaurant';

const Cards = ({ reviews }) => {
  const { details } = useRestaurantContext();

  const statistics = [
    {
      icon: <Home fontSize="large" />,
      text: 'Reviews',
      content: details.count,
      background: 'rgba(152,33,35,0.55)',
    },
    {
      icon: <Home fontSize="large" />,
      text: 'Rating',
      content: details.rating,
      background: 'rgba(15,157,226,0.55)',
    },
    {
      icon: <Home fontSize="large" />,
      text: 'Reviews',
      content: details.count,
      background: 'rgba(20,162,67,0.55)',
    },
    {
      icon: <Home fontSize="large" />,
      text: 'Rating',
      content: details.rating,
      background: 'rgba(156,20,162,0.55)',
    },
  ];

  return (
    <DashboardContent>
      <FlexContainer gap={1.5} flexWrap="wrap">
        {statistics.map((item, index) => (
          <Card
            sx={{
              background: item.background,
              width: '190px',
              height: '145px',
            }}
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
                <Text variant="subHeader" fontWeight={500}>
                  {item.content}
                </Text>
                <Text variant="body" fontWeight={800}>
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
