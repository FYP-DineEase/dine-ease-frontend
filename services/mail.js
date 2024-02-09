import api from './api';

export const forgotPassword = (email) => {
  return api.get(`/api/${service}/forgot-password/${email}`);
};

export const resendConfirmation = (email) => {
  return api.get(`/api/${service}/resend-confirmation/${email}`);
};
