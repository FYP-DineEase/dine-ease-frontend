import React from 'react';

// Styles
import { Avatar } from '@mui/material';
import { FlexContainer, Text } from '../UI';

const Activity = ({ item }) => {
  return (
    <FlexContainer gap={2} sx={{ justifyContent: 'left' }}>
      <Avatar src={item.image.src} alt="notification" sx={{ height: 60, width: 60 }} />
      <FlexContainer
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Text variant="body" color="text.secondary">
          {item.message}
        </Text>
        <Text variant="sub" color="text.secondary">
          {item.date}
        </Text>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Activity;
