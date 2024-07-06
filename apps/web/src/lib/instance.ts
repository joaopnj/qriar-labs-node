import axios from "axios";

const mainInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  headers: {},
});

mainInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

mainInstance.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error)
);

export default mainInstance;