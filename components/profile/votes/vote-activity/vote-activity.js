import React, { useEffect, useState } from 'react';
import { useProfileContext } from '@/context/profile';

// Styles
import { Avatar, Divider } from '@mui/material';
import { FlexContainer, Text } from '../../../UI';

// Snackbar
import { enqueueSnackbar } from 'notistack';

// Services
import { getUserVotes } from '@/services/review';

// Helpers
import { getError } from '@/helpers/snackbarHelpers';
import { getDate } from '@/helpers/dateHelpers';

// Icons
import PollIcon from '@mui/icons-material/Poll';
import { getFileUrl } from '@/helpers/fileHelpers';
import Link from 'next/link';

const VotesActivity = () => {
  const [votes, setVotes] = useState([]);
  const { details } = useProfileContext();

  const fetchUserVotes = async () => {
    try {
      const response = await getUserVotes(details.id);
      setVotes(response.data);
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: getError(e) });
    }
  };

  useEffect(() => {
    if (details?.id) fetchUserVotes();
  }, [details?.id]);

  if (!votes.length) {
    return (
      <FlexContainer mt={10} gap={2}>
        <PollIcon fontSize="large" color="primary" />
        <Text variant="subHeader">Currently No Votes</Text>
      </FlexContainer>
    );
  }

  return votes.map((vote) => (
    <React.Fragment key={vote.id}>
      <FlexContainer gap={2} sx={{ justifyContent: 'left' }}>
        <Avatar
          alt="User Avatar"
          src={
            details.avatar &&
            getFileUrl(
              process.env.NEXT_PUBLIC_AWS_S3_USERS_BUCKET,
              `${details.id}/avatar/${details.avatar}`
            )
          }
          sx={{
            height: 65,
            width: 65,
          }}
        >
          {!details.avatar && details.firstName.slice(0, 1)}
        </Avatar>
        <FlexContainer
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Text variant="body">
            <Text variant="body" fontWeight={500}>
              {details.name}
            </Text>{' '}
            reacted{' '}
            <Text variant="body" fontWeight={500}>
              {vote.type}
            </Text>{' '}
            to{' '}
            <Link href={`/profile/${vote.reviewId.userId.slug}`}>
              <Text variant="body" fontWeight={500}>
                {vote.reviewId.userId.name}
              </Text>
            </Link>
            's review
          </Text>
          <Text variant="sub" mt={1}>
            {getDate(vote.createdAt)}
          </Text>
        </FlexContainer>
      </FlexContainer>
      <Divider orientation="horizontal" variant="middle" sx={{ mt: 2, mb: 2 }} />
    </React.Fragment>
  ));
};

export default VotesActivity;
