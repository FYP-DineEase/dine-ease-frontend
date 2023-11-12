import { Button, styled } from '@mui/material';

export const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const FormButton = styled(PrimaryButton)(({ theme }) => ({
  width: '50%',
  margin: 'auto',
}));
