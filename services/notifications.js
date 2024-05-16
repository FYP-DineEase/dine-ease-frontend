import api from './api';
import { PORTS } from '@/utils/port';

const service = 'notification';
const port = PORTS[service];

export const getNotifications = () => {
  return api.get(`http://localhost:${port}/api/notifications`);
};

export const readNotifications = (payload) => {
  return api.post(`http://localhost:${port}/api/notifications`, payload);
};
