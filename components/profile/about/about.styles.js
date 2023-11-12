import { Avatar, Box, styled } from '@mui/material';

export const AboutContainer = styled(Box)(({ theme }) => ({
  width: '85%',
  height: '500px',
  margin: 'auto',
  backgroundColor: theme.palette.text.primary,
  position: 'relative',
  top: -50,
  borderRadius: '5px',
  padding: theme.spacing(1),
  boxShadow: '1px 1px 8px #888888',
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  height: 160,
  width: 160,
  position: 'absolute',
  top: -75,
  left: '50%',
  transform: 'translateX(-50%)',
}));

export const DetailsContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  top: 80,
  padding: theme.spacing(1),
}));
