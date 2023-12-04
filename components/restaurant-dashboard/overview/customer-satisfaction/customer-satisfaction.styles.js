import { styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const SatisfactionContainer = styled(FlexContainer)(({ theme }) => ({
  minHeight: '150px',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));
