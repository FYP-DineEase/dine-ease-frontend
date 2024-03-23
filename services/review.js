import api from './api';

// Reviews
export const getRestaurantReview = (restaurantId, limit = 0, offset = 0) => {
  return api.get(`/api/review/${restaurantId}?limit=${limit}&offset=${offset}`);
};

export const getUserReview = (userId) => {
  return api.get(`/api/review/user/${userId}`);
};

export const addReview = (restaurantId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.post(`/api/review/${restaurantId}`, payload, {
    headers,
  });
};

export const updateReview = (reviewId, payload) => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return api.patch(`/api/review/${reviewId}`, payload, {
    headers,
  });
};

export const deleteReview = (reviewId) => {
  return api.delete(`/api/review/${reviewId}`);
};

export const getUserVotes = (userId) => {
  return api.get(`/api/review/vote/user/${userId}`);
};

export const addVote = (reviewId, payload) => {
  return api.post(`/api/review/vote/${reviewId}`, payload);
};

export const updateVote = (reviewId, payload) => {
  return api.patch(`/api/review/vote/${reviewId}`, payload);
};

export const deleteVote = (reviewId) => {
  return api.delete(`/api/review/vote/${reviewId}`);
};
