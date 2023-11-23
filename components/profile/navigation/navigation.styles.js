import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '5px',
  backgroundColor: theme.palette.text.primary,
  position: 'relative',
  top: -75,
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    order: 1,
  },
}));
