import { Box, styled } from '@mui/material';
import { FlexContainer } from '@/components/UI';

export const AboutContainer = styled(Box)(({ theme }) => ({
  maxWidth: '400px',
  height: '450px',
  margin: 'auto',
  backgroundColor: theme.palette.text.primary,
  position: 'relative',
  top: -75,
  borderRadius: '10px',
  padding: theme.spacing(2),
  boxShadow: '1px 1px 8px #888888',

  [theme.breakpoints.down('lg')]: {
    maxWidth: 'none',
  },
}));

export const IconContainer = styled(FlexContainer)(({ theme }) => ({
  justifyContent: 'left',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  gap: theme.spacing(1),
}));

export const ProfileAvatarContainer = styled(Box)(({ theme }) => ({
  height: 150,
  width: 150,
  position: 'absolute',
  top: -75,
  left: '50%',
  transform: 'translateX(-50%)',
}));

export const AvatarConfirmation = styled(FlexContainer)(({ theme }) => ({
  position: 'relative',
  top: -20,
}));

export const DetailsContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  top: 80,
  padding: theme.spacing(1),
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
