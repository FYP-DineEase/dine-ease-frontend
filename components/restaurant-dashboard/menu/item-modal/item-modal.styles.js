import { Box, styled } from '@mui/material';
import { ModalContent } from '@/components/UI';

export const ModalContainer = styled(ModalContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: theme.palette.text.primary,
  border: 'none',
  width: '650px',
  gap: theme.spacing(3.5),
  [theme.breakpoints.down('md')]: {
    width: 'auto',
  },
}));

export const ItemDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3.5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));
