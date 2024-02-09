import api from './api';

// Records
export const getRestaurantRecords = (restaurantId) => {
  return api.get(`/api/${service}/records/${restaurantId}`);
};

// OTP
export const generateOTP = (restaurantId) => {
  return api.get(`/api/${service}/generate-otp/${restaurantId}`);
};

export const verifyOTP = (restaurantId, payload) => {
  return api.post(`/api/${service}/verify-otp/${restaurantId}`, payload);
};

// Restaurant
export const checkRestaurant = (params) => {
  return api.get(`/api/${service}/check`, { params });
};

export const getRestaurantSlugs = () => {
  return api.get(`/api/${service}/all/slug`);
};

export const getRestaurantBySlug = (slug) => {
  return api.get(`/api/${service}/${slug}`);
};

export const getApprovedRestaurants = () => {
  return api.get(`/api/${service}/approved`);
};

export const getUserRestaurants = () => {
  return api.get(`/api/${service}/user`);
};

export const listRestaurant = (payload) => {
  return api.post(`/api/${service}`, payload);
};

export const uploadRestaurantCover = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`/api/${service}/upload/cover/${restaurantId}`, payload, { headers });
};

export const uploadRestaurantImages = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`/api/${service}/upload/${restaurantId}`, payload, { headers });
};

export const updateRestaurantDetails = (restaurantId, payload) => {
  return api.patch(`/api/${service}/details/${restaurantId}`, payload);
};

export const deleteRestaurantImages = (restaurantId, payload) => {
  return api.delete(`/api/${service}/images/${restaurantId}`, {
    data: payload,
  });
};

// Menu
export const addMenuItem = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`/api/menu/${restaurantId}`, payload, {
    headers,
  });
};

export const updateMenuItem = (restaurantId, menuId, payload) => {
  return api.patch(`/api/menu/${restaurantId}/${menuId}`, payload);
};

export const updateMenuOrder = (restaurantId, payload) => {
  return api.patch(`/api/menu/${restaurantId}`, payload);
};

export const deleteMenuItem = (restaurantId, menuId) => {
  return api.delete(`/api/menu/${restaurantId}/${menuId}`);
};
