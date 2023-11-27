import React, { useState } from 'react';

// Components
import About from '../about/about';
import Review from '@/components/reviews/review';

// Styles
import { Text } from '@/components/UI';
import { Tabs, Tab, Box, Grid } from '@mui/material';
import { Container } from './navigation.styles';

// Icons
import ReviewIcon from '@mui/icons-material/Reviews';
import VoteIcon from '@mui/icons-material/ThumbsUpDown';
import PlanIcon from '@mui/icons-material/EventNote';
import BadgeIcon from '@mui/icons-material/EmojiEvents';

const Navigation = () => {
  const [value, setValue] = useState(0);

  const tabItems = [
    {
      value: 'Reviews',
      icon: <ReviewIcon fontSize="small" />,
      label: 'Reviews',
      childComponent: <Review />,
    },
    { value: 'Votes', icon: <VoteIcon fontSize="small" />, label: 'Votes' },
    { value: 'Plans', icon: <PlanIcon fontSize="small" />, label: 'Plans' },
    { value: 'Badges', icon: <BadgeIcon fontSize="small" />, label: 'Badges' },
  ];

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Grid item xs={12} lg={6} sx={{ order: { xs: 2, lg: 0 } }}>
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
                  sx={{ textTransform: 'none', position: 'sticky' }}
                  label={<Text variant="body">{item.label}</Text>}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ mt: 2 }}>{tabItems[value].childComponent}</Box>
        </Container>
      </Grid>
      <Grid item xs={12} lg={3} sx={{ order: { xs: 1, lg: 0 } }}>
        <About />
      </Grid>
    </React.Fragment>
  );
};

export default Navigation;
