import { Button, styled } from '@mui/material';

export const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  color: theme.palette.text.primary,

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

PrimaryButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
};

export const FormButton = styled(PrimaryButton)(({ theme }) => ({
  width: '50%',
  margin: 'auto',
}));
