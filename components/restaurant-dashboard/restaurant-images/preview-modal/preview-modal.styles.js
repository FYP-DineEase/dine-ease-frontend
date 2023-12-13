import { Box, IconButton, styled } from '@mui/material';
import { ModalContent } from '@/components/UI';

export const ModalContainer = styled(ModalContent)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: theme.palette.text.primary,
  border: 'none',
  gap: theme.spacing(2),
  minWidth: '700px',

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

export const ImageListContainer = styled(Box)(({ theme }) => ({
  maxHeight: '500px',
  width: '100%',
  overflowY: 'auto',
}));

export const ImageDeleteIcon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
}));
