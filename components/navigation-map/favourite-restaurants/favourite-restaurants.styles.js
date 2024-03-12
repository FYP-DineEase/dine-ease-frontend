import { Box, styled } from '@mui/material';

export const ListContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '55%',
  left: 30,
  overflowY: 'auto',
  backgroundColor: theme.palette.static.primary,
  zIndex: 1,
  width: '300px',
  height: '80%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  borderRadius: '5px',

  [theme.breakpoints.down('md')]: {
    height: '225px',
    width: '100vw',
    bottom: 0,
    top: 'unset',
    left: 'unset',
    display: 'flex',
    transform: 'translateY(0)',
    gap: theme.spacing(0.5),
  },
}));

export const RestaurantImage = styled(Box)(({ theme }) => ({
  height: '190px',
  width: '90%',
  position: 'relative',
  margin: 'auto',
  marginTop: theme.spacing(1.5),

  [theme.breakpoints.down('md')]: {
    height: '150px',
    width: '200px',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
