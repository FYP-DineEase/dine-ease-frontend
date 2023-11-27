import React from 'react';

// Styles
import * as Styles from './vote.styles';
import { PrimaryButton } from '@/components/UI';

// Icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDownAlt';
import LaughIcon from '@mui/icons-material/SentimentVerySatisfied';
import UsefulIcon from '@mui/icons-material/Lightbulb';
import CoolIcon from '@mui/icons-material/AutoAwesome';

const VoteOptions = () => {
  const options = [
    { icon: <ThumbUpIcon />, value: 'like' },
    { icon: <ThumbDownIcon />, value: 'dislike' },
    { icon: <LaughIcon />, value: 'funny' },
    { icon: <CoolIcon />, value: 'cool' },
    { icon: <UsefulIcon />, value: 'useful' },
  ];

  return (
    <Styles.Container>
      {options.map((item) => (
        <PrimaryButton key={item.value} endIcon={item.icon}>
          {item.value}
        </PrimaryButton>
      ))}
    </Styles.Container>
  );
};

export default VoteOptions;
