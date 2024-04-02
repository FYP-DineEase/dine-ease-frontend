import api from './api';
import { PORTS } from '@/utils/port';

const service = 'map';
const port = PORTS[service];

export const getMapBySlug = (slug) => {
  return api.get(`http://localhost:${port}/api/${service}/${slug}`);
};

export const getAllMapSlugs = () => {
  return api.get(`http://localhost:${port}/api/${service}/all/slugs`);
};

export const addMapRestaurant = (payload) => {
  return api.post(`http://localhost:${port}/api/${service}`, payload);
};

export const updateTheme = (payload) => {
  return api.patch(`http://localhost:${port}/api/${service}/theme`, payload);
};

export const deleteMapRestaurant = (payload) => {
  return api.patch(`http://localhost:${port}/api/${service}`, payload);
};
