import { Box, styled } from '@mui/material';
import { FlexContainer } from '../UI';

export const ReviewCard = styled(Box)(({ theme }) => ({
  minHeight: '200px',
  width: '100%',
  backgroundColor: 'rgba(180, 180, 180, 0.1)',
  border: "1px solid rgba(180, 180, 180, 0.2)",
  padding: theme.spacing(2),
  borderRadius: '15px',
  wordSpacing: 2,
}));

export const UserDetails = styled(FlexContainer)(({ theme }) => ({
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
}));