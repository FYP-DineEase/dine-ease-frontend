import { styled } from '@mui/material';
import { ModalContent } from '@/components/UI';

export const ModalContainer = styled(ModalContent)(({ theme }) => ({
  maxWidth: '500px',
  backgroundColor: theme.palette.text.primary,
  border: 'none',
  gap: theme.spacing(2.5),
}));