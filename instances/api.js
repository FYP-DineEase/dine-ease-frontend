import axios from "axios";
import PORT from "@/utils/ports";

// const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: `http://localhost:${PORT}/api`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
});

export default api;
