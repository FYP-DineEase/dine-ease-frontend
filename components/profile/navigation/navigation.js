import React, { useState } from 'react';

// Components
import About from '../about/about';
import Review from '@/components/review/review';

// Styles
import { Text } from '@/components/UI';
import { Tabs, Tab, Box } from '@mui/material';
import { Container } from './navigation.styles';

// Icons
import ReviewIcon from '@mui/icons-material/Reviews';
import VoteIcon from '@mui/icons-material/ThumbsUpDown';
import PlanIcon from '@mui/icons-material/EventNote';
import BadgeIcon from '@mui/icons-material/EmojiEvents';
import MapIcon from '@mui/icons-material/AddLocationAlt';

const Navigation = () => {
  const [value, setValue] = useState(0);

  const tabItems = [
    {
      value: 'Reviews',
      icon: <ReviewIcon />,
      label: 'Reviews',
      childComponent: <Review />,
    },
    { value: 'Votes', icon: <VoteIcon />, label: 'Votes' },
    { value: 'Plans', icon: <PlanIcon />, label: 'Plans' },
    { value: 'Badges', icon: <BadgeIcon />, label: 'Badges' },
  ];

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          centered
          scrollButtons="auto"
        >
          {tabItems.map((item) => (
            <Tab
              key={item.value}
              icon={item.icon}
              iconPosition="start"
              sx={{ textTransform: 'none' }}
              label={<Text variant="main">{item.label}</Text>}
            />
          ))}
        </Tabs>
      </Box>
      {tabItems[value].childComponent}
    </Container>
  );
};

export default Navigation;
