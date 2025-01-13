import axios from "axios";
import Cookies from "js-cookie";
import { API_URL } from "./apiURLs";

const adapter = axios.create({
  baseURL: API_URL,
});

adapter.interceptors.request.use(
  (config) => {
    const token = Cookies.get("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default adapter;
