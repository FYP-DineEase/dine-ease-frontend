import api from './api';

export const checkEmail = (email) => {
  return api.get(`/api/${service}/check-email?email=${email}`);
};

export const login = (payload) => {
  return api.post(`/api/${service2}/login`, payload);
};

export const signup = (payload) => {
  return api.post(`/api/${service}/register`, payload);
};

export const verifyAccount = (token) => {
  return api.get(`/api/${service}/verify?token=${token}`);
};

export const updatePassword = (token, payload) => {
  return api.patch(`/api/${service}/update-password?token=${token}`, payload);
};
