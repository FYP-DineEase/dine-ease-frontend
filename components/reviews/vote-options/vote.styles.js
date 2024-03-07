import { styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const Container = styled(FlexContainer)(({ theme }) => ({
  width: '100%',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(2),
  gap: theme.spacing(1),
  flexWrap: 'wrap',
}));
