import api from './api';

export const getUserDetails = () => {
  return api.get(`/api/${service}/details`);
};

export const getUserBySlug = (slug) => {
  return api.get(`/api/${service}/slug/${slug}`);
};

export const getAllUserSlugs = () => {
  return api.get(`/api/${service}/all/slug`);
};

export const updateProfileDetails = (payload) => {
  return api.patch(`/api/${service}/profile`, payload);
};

export const updateProfileImage = (payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`/api/${service}/upload`, payload, { headers });
};
