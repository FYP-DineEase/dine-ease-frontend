import { styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const Header = styled(FlexContainer)(({ theme }) => ({
  flexDirection: 'column',
  textAlign: 'center',
  marginBottom: theme.spacing(5),
  gap: theme.spacing(2),
}));
