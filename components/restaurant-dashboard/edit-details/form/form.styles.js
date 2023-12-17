import { Alert, styled } from '@mui/material';

export const StyledAlert = styled(Alert)(({ theme }) => ({
  width: '60%',
  margin: 'auto',
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
