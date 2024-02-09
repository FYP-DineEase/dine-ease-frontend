import axios from 'axios';

export const buildClient = ({ req }) => {
  let baseURL = '/';
  let headers = {};

  // We are on server
  if (typeof window === 'undefined') {
    baseURL = 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local';
    headers = req.headers;
  }

  return axios.create({ baseURL, headers, timeout: 5000 });
};

const api = buildClient({}); // Create the API client

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' && localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    if (error.response && error.response.data.message === 'jwt expired') {
      localStorage.clear();
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
