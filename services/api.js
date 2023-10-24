import axios from "axios";

const PORT = {
  auth: 3001,
  users: 3002,
  mail: 3003,
  storage: 3004,
  "login-gateway": 3005,
  restaurant: 3006,
};

// const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: `http://localhost:${PORT}/api`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
});

export default api;
