import axios from "axios";

console.log(process.env.REACT_APP_BACKEND_URL)
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token
      ? `Bearer ${token}`
      : "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if(response) {
        return Promise.resolve(response)
    }
    return Promise.reject(response)
  },
  async(error) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
         sessionStorage.removeItem('token');
         return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;