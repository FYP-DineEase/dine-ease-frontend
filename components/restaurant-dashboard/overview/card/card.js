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
      background: 'linear-gradient(0deg, rgba(112,6,6,0.7) 0%, rgba(152,33,35,0.6) 70%)',
    },
    {
      icon: <Home fontSize="large" />,
      text: 'Rating',
      content: 3,
      background:
        'linear-gradient(0deg, rgba(6,78,112,0.7) 0%, rgba(15,157,226,0.6) 70%)',
    },
    {
      icon: <Home fontSize="large" />,
      text: 'Reviews',
      content: 120,
      background: 'linear-gradient(0deg, rgba(11,96,34,0.7) 0%, rgba(20,162,67,0.6) 70%)',
    },
    {
      icon: <Home fontSize="large" />,
      text: 'Rating',
      content: 5,
      background:
        'linear-gradient(0deg, rgba(92,11,101,0.7) 0%, rgba(156,20,162,0.6) 70%)',
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
              height: '150px',
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
