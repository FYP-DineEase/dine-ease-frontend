import api from './api';
import { PORTS } from '@/utils/port';

const service = 'review';
const port = PORTS[service];

// Reviews
export const getRestaurantReview = (restaurantId, limit = 0, offset = 0) => {
  return api.get(
    `http://localhost:${port}/api/${service}/${restaurantId}?limit=${limit}&offset=${offset}`
  );
};

export const getUserReview = (userId) => {
  return api.get(`http://localhost:${port}/api/${service}/user/${userId}`);
};

export const getReviewBySlug = (slug) => {
  return api.get(`http://localhost:${port}/api/${service}/slug/${slug}`);
};

export const addReview = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`http://localhost:${port}/api/${service}/${restaurantId}`, payload, {
    headers,
  });
};

export const updateReview = (reviewId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.patch(`http://localhost:${port}/api/${service}/${reviewId}`, payload, {
    headers,
  });
};

export const deleteReview = (reviewId) => {
  return api.delete(`http://localhost:${port}/api/${service}/${reviewId}`);
};

export const getUserVotes = (userId) => {
  return api.get(`http://localhost:${port}/api/${service}/vote/user/${userId}`);
};

export const addVote = (reviewId, payload) => {
  return api.post(`http://localhost:${port}/api/${service}/vote/${reviewId}`, payload);
};

export const updateVote = (reviewId, payload) => {
  return api.patch(`http://localhost:${port}/api/${service}/vote/${reviewId}`, payload);
};

export const deleteVote = (reviewId) => {
  return api.delete(`http://localhost:${port}/api/${service}/vote/${reviewId}`);
};
