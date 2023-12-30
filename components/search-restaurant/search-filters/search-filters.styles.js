import { Box, styled } from '@mui/material';

export const FilterContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  width: '30%',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
