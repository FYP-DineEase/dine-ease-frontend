import React from 'react';

// Components
import VoteOptions from './vote-options/vote';

// Styles
import { Text } from '../UI';
import { Box, Avatar } from '@mui/material';
import * as Styles from './review.styles';

const Review = () => {
  return (
    <Styles.ReviewCard>
      <Styles.UserDetails>
        <Avatar
          sx={{ width: 72, height: 72 }}
          alt="Remy Sharp"
          src={'/assets/images/avatar.jpg'}
        />
        <Box>
          <Text variant="main" fontWeight={500} sx={{ display: 'block' }}>
            Mujtaba Shafiq
          </Text>
          <Text variant="body" sx={{ display: 'block', mt: 0.5 }}>
            10 Oct 2023, 11:59 pm
          </Text>
        </Box>
      </Styles.UserDetails>
      <Text variant="main" sx={{ display: 'block', mt: 2 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book.
        <Text variant="main" sx={{ display: 'block', mt: 2 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </Text>
      </Text>
      <VoteOptions />
    </Styles.ReviewCard>
  );
};

export default Review;
