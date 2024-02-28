import api from './api';

export const checkEmail = (email) => {
  return api.get(`/api/auth/check-email?email=${email}`);
};

export const login = (payload) => {
  return api.post(`/api/login`, payload);
};

export const signup = (payload) => {
  return api.post(`/api/auth/register`, payload);
};

export const verifyAccount = (token) => {
  return api.get(`/api/auth/verify?token=${token}`);
};

export const updatePassword = (token, payload) => {
  return api.patch(`/api/auth/update-password?token=${token}`, payload);
};
