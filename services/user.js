import api, { buildClient } from './api';

export const getUserDetails = () => {
  return api.get(`/api/user/details`);
};

export const getUserBySlug = (slug) => {
  return buildClient().get(`/api/user/slug/${slug}`);
};

export const getAllUserSlugs = () => {
  return buildClient().get(`/api/user/all/slug`);
};

export const updateProfileDetails = (payload) => {
  return api.patch(`/api/user/profile`, payload);
};

export const updateProfileImage = (payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`/api/user/upload`, payload, { headers });
};
