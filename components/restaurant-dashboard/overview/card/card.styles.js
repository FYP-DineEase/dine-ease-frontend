import { styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const IconContainer = styled(FlexContainer)(({ theme }) => ({
  height: '45px',
  width: '45px',
  border: '1px solid lightgrey',
  borderRadius: '5px',
  marginBottom: theme.spacing(1.5),
}));
