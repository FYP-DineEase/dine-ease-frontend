import { Box, styled } from '@mui/material';

export const MapContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',

  '.mapboxgl-compact': {
    display: 'none',
  },
}));
