import api from './api';
import { PORTS } from '@/utils/port';

const service = 'user';
const port = PORTS[service];

export const getUserDetails = () => {
  return api.get(`http://localhost:${port}/api/${service}/details`);
};

export const getUserBySlug = (slug) => {
  return api.get(`http://localhost:${port}/api/${service}/slug/${slug}`);
};

export const getAllUserSlugs = () => {
  return api.get(`http://localhost:${port}/api/${service}/all/slug`);
};

export const updateProfileDetails = (payload) => {
  return api.patch(`http://localhost:${port}/api/${service}/profile`, payload);
};

export const updateProfileImage = (payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`http://localhost:${port}/api/${service}/upload`, payload, { headers });
};
