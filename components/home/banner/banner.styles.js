import { FlexContainer } from '@/components/UI';
import { Grid, styled } from '@mui/material';

export const BannerContent = styled(FlexContainer)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(4),
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign:"center"
  },
}));

export const BannerImage = styled(Grid)(({ theme }) => ({
  position: 'relative',
  height: '600px',
  width: '600px',
  [theme.breakpoints.down('md')]: {
    order: 0,
    height: '250px',
    width: '300px',
  },
}));
