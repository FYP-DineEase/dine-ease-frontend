import { Box, styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const SearchContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(3),
}));

export const IconContainer = styled(FlexContainer)(({ theme }) => ({
  justifyContent: 'left',
  marginTop: theme.spacing(2),
  gap: theme.spacing(2),
}));

export const ListContainer = styled(Box)(({ theme }) => ({
  height: '72vh',
  minHeight: '600px',
  overflowY: 'auto',
}));

export const RestaurantContainer = styled(FlexContainer)(({ theme }) => ({
  justifyContent: 'left',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const RestaurantImage = styled(Box)(({ theme }) => ({
  height: '190px',
  width: '35%',
  position: 'relative',
}));

export const RestaurantContent = styled(Box)(({ theme }) => ({
  width: '65%',
  paddingRight: theme.spacing(3),
  paddingLeft: theme.spacing(3),
}));

export const Cuisines = styled(FlexContainer)(({ theme }) => ({
  justifyContent: 'left',
  gap: theme.spacing(0.5),
  overflowX: 'auto',
}));
