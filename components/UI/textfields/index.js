import { TextField, styled } from '@mui/material';
import { baseFontSizes } from '../typography/font-sizes';

export const InputField = styled(TextField)(({ theme }) => ({
  width: '100%',
  input: {
    color: theme.palette.static.secondary,

    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  },

  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },

  '& .MuiFormHelperText-root': {
    fontSize: baseFontSizes.sub.default,
    margin: 0,
  },

  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },

  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.secondary.main,
  },

  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
}));
