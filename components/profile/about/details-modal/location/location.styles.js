import { IconButton, styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const UserMapContainer = styled(FlexContainer)({
  height: '300px',
  width: '100%',

  '.mapboxgl-compact': {
    display: 'none',
  },
});

export const UserMarkerFinder = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: '80px',
  right: '3px',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.text.primary,
}));
