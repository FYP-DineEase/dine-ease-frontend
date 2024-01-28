import { styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';
import LocationIcon from '@mui/icons-material/LocationOn';
import { NAV_HEIGHT } from '@/utils/constants';

export const MapContainer = styled(FlexContainer)(({ theme }) => ({
  height: `calc(100vh - ${NAV_HEIGHT}px)`,
  width: '100vw',

  '.mapboxgl-compact': {
    display: 'none',
  },
}));

export const Pin = styled(LocationIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '3rem',
  zIndex: 4,
}));
