import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const DoctorToken = localStorage.getItem("DoctorToken");
  if (DoctorToken) {
    config.headers.Authorization = `Bearer ${DoctorToken}`;
  }
  return config;
});

export default axiosInstance;
