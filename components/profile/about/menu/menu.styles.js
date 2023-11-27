import { styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const EditContainer = styled(FlexContainer)(({ theme }) => ({
  gap: theme.spacing(0.5),
  cursor: 'pointer',
  borderRadius: "15px",
  position: 'absolute',
  top: 50,
  right: 20,
  color: theme.palette.text.secondary,
}));
