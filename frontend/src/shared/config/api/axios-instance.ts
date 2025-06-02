import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5050',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn('⚠️ Unauthorized. Можно сделать авто-рефреш.');
      // TODO: Здесь можно реализовать авто-обновление токена по refreshToken
      // например, вызвать /api/refresh-token
      // и заново повторить исходный запрос
    }
    return Promise.reject(error);
  }
);