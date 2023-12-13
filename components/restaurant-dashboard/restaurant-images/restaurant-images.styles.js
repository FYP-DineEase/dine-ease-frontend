import { Box, IconButton, styled } from '@mui/material';
import { DashboardContent, FlexContainer } from '@/components/UI';

export const ImagePlaceHolder = styled(FlexContainer)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(6),
  border: `1px dashed ${theme.palette.primary.main}`,
  cursor: 'pointer',
  borderRadius: 10,
}));

export const ImagePlaceContainer = styled(DashboardContent)(({ theme }) => ({
  width: '50%',
  padding: theme.spacing(4),
  borderRadius: 10,
}));
