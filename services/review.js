import api, { buildClient } from './api';

// Reviews
export const getRestaurantReview = (restaurantId, limit = 0, offset = 0) => {
  return api.get(`/api/review/${restaurantId}?limit=${limit}&offset=${offset}`);
};

export const getUserReview = (userId) => {
  return api.get(`/api/review/user/${userId}`);
};
