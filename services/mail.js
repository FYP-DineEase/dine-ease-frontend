import api from './api';

export const forgotPassword = (email) => {
  return api.get(`/api/mail/forgot-password/${email}`);
};

export const resendConfirmation = (email) => {
  return api.get(`/api/mail/resend-confirmation/${email}`);
};
