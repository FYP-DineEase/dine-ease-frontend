import {
  DASHBOARD_DRAWER_FULLWIDTH,
  DASHBOARD_DRAWER_RESPONSIVEWIDTH,
  NAV_HEIGHT,
} from '@/utils/constants';
import { Box, styled } from '@mui/material';

export const CustomDrawer = styled(Box)(({ theme, selected }) => ({
  height: `calc(100% - ${NAV_HEIGHT}px)`,
  border: '1px solid black',
  width: `${DASHBOARD_DRAWER_FULLWIDTH}px`,
  position: 'absolute',
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    width: `${DASHBOARD_DRAWER_RESPONSIVEWIDTH}px`,
  },
}));
