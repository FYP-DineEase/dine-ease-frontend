import { styled } from '@mui/material';
import { FlexContainer, PageContent } from '@/components/UI';

export const Card = styled(PageContent)(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  maxWidth: '450px',
  borderRadius: '30px',
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  },
}));

export const ImageCountOverlay = styled(FlexContainer)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0.5)',
  position: 'absolute',
  height: '100%',
  width: '100%',
  borderRadius: '10px',
}));
