import api, { buildClient } from './api';

export const getMapBySlug = (slug) => {
  return buildClient().get(`/api/map/${slug}`);
};

export const getAllMapSlugs = () => {
  return buildClient().get(`/api/map/all/slugs`);
};

export const addMapRestaurant = (payload) => {
  return api.post(`/api/map`, payload);
};

export const updateTheme = (payload) => {
  return api.patch(`/api/map/theme`, payload);
};

export const deleteMapRestaurant = (payload) => {
  return api.patch(`/api/map`, payload);
};
