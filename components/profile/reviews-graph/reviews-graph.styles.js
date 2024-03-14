import { Box, styled } from '@mui/material';

export const DetailsContainer = styled(Box)(({ theme }) => ({
  maxWidth: '400px',
  margin: 'auto',
  backgroundColor: theme.palette.text.primary,
  position: 'relative',
  top: -75,
  borderRadius: '10px',
  padding: theme.spacing(2),
  boxShadow: '1px 1px 8px #888888',
}));
