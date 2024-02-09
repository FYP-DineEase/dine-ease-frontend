import api from './api';

export const getMapBySlug = (slug) => {
  return api.get(`/api/${service}/${slug}`);
};

export const getAllMapSlugs = () => {
  return api.get(`/api/${service}/all/slugs`);
};

export const addMapRestaurant = (payload) => {
  return api.post(`/api/${service}`, payload);
};

export const updateTheme = (payload) => {
  return api.patch(`/api/${service}/theme`, payload);
};

export const deleteMapRestaurant = (payload) => {
  return api.patch(`/api/${service}`, payload);
};
