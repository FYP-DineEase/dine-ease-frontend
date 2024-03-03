import { styled, IconButton } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const ImagePlaceHolder = styled(FlexContainer)(({ theme }) => ({
  flexDirection: 'column',
  width: '150px',
  height: '130px',
  gap: theme.spacing(1),
  border: `1px dashed ${theme.palette.primary.main}`,
  cursor: 'pointer',
  borderRadius: 10,
}));

export const ImageDeleteIcon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 5,
  right: 5,
  padding: theme.spacing(0.5),
}));