import { styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const MenuItemsContainer = styled(FlexContainer)(({ theme }) => ({
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  justifyContent: 'flex-start',
}));
