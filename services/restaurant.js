import api, { buildClient } from './api';

// Records
export const getRestaurantRecords = (restaurantId) => {
  return api.get(`/api/restaurant/records/${restaurantId}`);
};

// OTP
export const generateOTP = (restaurantId) => {
  return api.get(`/api/restaurant/generate-otp/${restaurantId}`);
};

export const verifyOTP = (restaurantId, payload) => {
  return api.post(`/api/restaurant/verify-otp/${restaurantId}`, payload);
};

// Restaurant
export const checkRestaurant = (params) => {
  return api.get(`/api/restaurant/check`, { params });
};

export const getRestaurantSlugs = () => {
  return buildClient().get(`/api/restaurant/all/slug`);
};

export const getRestaurantBySlug = (slug) => {
  return buildClient().get(`/api/restaurant/${slug}`);
};

export const getApprovedRestaurants = () => {
  return api.get(`/api/restaurant/approved`);
};

export const getUserRestaurants = () => {
  return api.get(`/api/restaurant/user`);
};

export const listRestaurant = (payload) => {
  return api.post(`/api/restaurant`, payload);
};

export const uploadRestaurantCover = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`/api/restaurant/upload/cover/${restaurantId}`, payload, { headers });
};

export const uploadRestaurantImages = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`/api/restaurant/upload/${restaurantId}`, payload, { headers });
};

export const updateRestaurantDetails = (restaurantId, payload) => {
  return api.patch(`/api/restaurant/details/${restaurantId}`, payload);
};

export const deleteRestaurantImages = (restaurantId, payload) => {
  return api.delete(`/api/restaurant/images/${restaurantId}`, {
    data: payload,
  });
};

// Menu
export const addMenuItem = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`/api/restaurant/menu/${restaurantId}`, payload, {
    headers,
  });
};

export const updateMenuItem = (restaurantId, menuId, payload) => {
  return api.patch(`/api/restaurant/menu/${restaurantId}/${menuId}`, payload);
};

export const updateMenuOrder = (restaurantId, payload) => {
  return api.patch(`/api/restaurant/menu/${restaurantId}`, payload);
};

export const deleteMenuItem = (restaurantId, menuId) => {
  return api.delete(`/api/restaurant/menu/${restaurantId}/${menuId}`);
};
