import api from './api';
import { PORTS } from '@/utils/port';

const service = 'restaurant';
const port = PORTS[service];

// Records
export const getRestaurantRecords = (restaurantId) => {
  return api.get(`http://localhost:${port}/api/${service}/records/${restaurantId}`);
};

// OTP
export const generateOTP = (restaurantId) => {
  return api.get(`http://localhost:${port}/api/${service}/generate-otp/${restaurantId}`);
};

export const verifyOTP = (restaurantId, payload) => {
  return api.post(
    `http://localhost:${port}/api/${service}/verify-otp/${restaurantId}`,
    payload
  );
};

// Restaurant
export const checkRestaurant = (params) => {
  return api.get(`http://localhost:${port}/api/${service}/check`, { params });
};

export const getRestaurantSlugs = () => {
  return api.get(`http://localhost:${port}/api/${service}/all/slug`);
};

export const getRestaurantBySlug = (slug) => {
  return api.get(`http://localhost:${port}/api/${service}/${slug}`);
};

export const getApprovedRestaurants = () => {
  return api.get(`http://localhost:${port}/api/${service}/approved`);
};

export const getUserRestaurants = () => {
  return api.get(`http://localhost:${port}/api/${service}/user`);
};

export const listRestaurant = (payload) => {
  return api.post(`http://localhost:${port}/api/${service}`, payload);
};

export const uploadRestaurantCover = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(
    `http://localhost:${port}/api/${service}/upload/cover/${restaurantId}`,
    payload,
    { headers }
  );
};

export const uploadRestaurantImages = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(
    `http://localhost:${port}/api/${service}/upload/${restaurantId}`,
    payload,
    { headers }
  );
};

export const updateRestaurantDetails = (restaurantId, payload) => {
  return api.patch(
    `http://localhost:${port}/api/${service}/details/${restaurantId}`,
    payload
  );
};

export const deleteRestaurantImages = (restaurantId, payload) => {
  return api.patch(
    `http://localhost:${port}/api/${service}/images/${restaurantId}`,
    payload
  );
};

// Menu
export const addMenuItem = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(
    `http://localhost:${port}/api/${service}/menu/${restaurantId}`,
    payload,
    {
      headers,
    }
  );
};

export const updateMenuItem = (restaurantId, menuId, payload) => {
  return api.patch(
    `http://localhost:${port}/api/${service}/menu/${restaurantId}/${menuId}`,
    payload
  );
};

export const updateMenuOrder = (restaurantId, payload) => {
  return api.patch(
    `http://localhost:${port}/api/${service}/menu/${restaurantId}`,
    payload
  );
};

export const deleteMenuItem = (restaurantId, menuId) => {
  return api.delete(
    `http://localhost:${port}/api/${service}/menu/${restaurantId}/${menuId}`
  );
};
