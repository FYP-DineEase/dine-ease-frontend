import { styled } from '@mui/material';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';

export const StyledPhoneInput = styled(PhoneInput)(({ theme }) => ({
  '&.react-phone-number': {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    WebkitAppearance: 'none',
  },
  '&.react-phone-number input.form-control': {
    width: '100%',
    height: '100%',
    border: 'none',
    backgroundColor: 'transparent',
  },

  '&.react-phone-number div.flag-dropdown': {
    border: 'none',
    backgroundColor: 'transparent',
  },
}));
