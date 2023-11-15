import { styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const SatisfactionContainer = styled(FlexContainer)(({ theme }) => ({
  height: '100%',
  gap: `${theme.spacing(1)}`,
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));
