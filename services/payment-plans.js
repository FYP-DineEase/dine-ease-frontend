import api from './api';
import { PORTS } from '@/utils/port';

const service = 'subscription';
const port = PORTS[service];

export const getActivePlans = () => {
  return api.get(`http://localhost:${port}/api/plan/active`);
};

export const getRestaurantSubscriptions = (restaurantId) => {
  return api.get(`http://localhost:${port}/api/${service}/${restaurantId}`);
};

export const createIntent = (payload) => {
  return api.post(`http://localhost:${port}/api/${service}/create-intent`, payload);
};

export const createSubscription = (payload) => {
  return api.post(`http://localhost:${port}/api/${service}`, payload);
};
