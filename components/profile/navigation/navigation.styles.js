import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '5px',
  backgroundColor: '#f1f2f6',
  position: 'relative',
  top: -50,
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    order: 1,
  },
}));
