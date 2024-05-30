import api from './api';
import { PORTS } from '@/utils/port';

const service = 'dining-plan';
const port = PORTS[service];

export const getUserPlans = (userId) => {
  return api.get(`http://localhost:${port}/api/${service}/user/${userId}`);
};

export const getUserInvitedPlans = (email) => {
  return api.get(`http://localhost:${port}/api/${service}/invited/${email}`);
};

export const addPlan = (payload) => {
  return api.post(`http://localhost:${port}/api/${service}`, payload);
};

export const updatePlan = (planId, payload) => {
  return api.patch(`http://localhost:${port}/api/${service}/${planId}`, payload);
};

export const deletePlan = (planId) => {
  return api.delete(`http://localhost:${port}/api/${service}/${planId}`);
};
