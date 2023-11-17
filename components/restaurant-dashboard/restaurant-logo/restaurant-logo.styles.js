import { styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const RestaurantDetails = styled(FlexContainer)(({ theme, open }) => ({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flexDirection: 'column',
  marginTop: `${theme.spacing(3)}`,
  gap: `${theme.spacing(2)}`,
  [theme.breakpoints.down('md')]: {
    marginTop: `${theme.spacing(0)}`,
    display: open ? 'flex' : 'none',
  },
}));
