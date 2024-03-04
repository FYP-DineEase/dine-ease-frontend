import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserState } from '@/store/user/userSlice';

// Styles
import * as Styles from './vote.styles';
import { PrimaryButton } from '@/components/UI';

// Icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDownAlt';
import LaughIcon from '@mui/icons-material/SentimentVerySatisfied';
import UsefulIcon from '@mui/icons-material/Lightbulb';
import CoolIcon from '@mui/icons-material/AutoAwesome';

const dummyVotes = [
  { type: 'like', userId: '65d8f8525b89ca028e417237' },
  { type: 'like', userId: '65d8f8525b89ca028e417241' },
  { type: 'funny', userId: '65d8f8525b89ca028e417242' },
  { type: 'like', userId: '65d8f8525b89ca028e417243' },
  { type: 'dislike', userId: '65d8f8525b89ca028e417244' },
  { type: 'cool', userId: '65d8f8525b89ca028e417245' },
];

const VoteOptions = () => {
  const user = useSelector(selectUserState);
  const [votes, setVotes] = useState(dummyVotes);

  const handleVote = (voteType) => {
    const updatedVotes = [...votes];
    const voteExists = votes.some((vote) => vote.userId === user.id);

    if (voteExists) {
      const updateIndex = updatedVotes.findIndex((vote) => vote.userId === user.id);
      const sameVoteType = updatedVotes[updateIndex].type?.includes(voteType);

      if (!sameVoteType) {
        updatedVotes[updateIndex].type = voteType;
      } else {
        updatedVotes.splice(updateIndex, 1);
      }
    } else {
      updatedVotes.push({ type: voteType, userId: user.id });
    }

    setVotes(updatedVotes);
  };

  const voteCounts = votes.reduce((acc, vote) => {
    if (acc[vote.type]) {
      acc[vote.type]++;
    } else {
      acc[vote.type] = 1;
    }
    return acc;
  }, {});

  const options = [
    { icon: <ThumbUpIcon />, value: 'like', count: voteCounts?.like || 0 },
    { icon: <ThumbDownIcon />, value: 'dislike', count: voteCounts?.dislike || 0 },
    { icon: <LaughIcon />, value: 'funny', count: voteCounts?.funny || 0 },
    { icon: <CoolIcon />, value: 'cool', count: voteCounts?.cool || 0 },
    { icon: <UsefulIcon />, value: 'useful', count: voteCounts?.useful || 0 },
  ];

  return (
    <Styles.Container>
      {options.map((item) => (
        <PrimaryButton
          key={item.value}
          endIcon={item.icon}
          value={item.value}
          onClick={() => handleVote(item.value)}
        >
          {item.count} {item.value}
        </PrimaryButton>
      ))}
    </Styles.Container>
  );
};

export default VoteOptions;
