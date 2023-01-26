import axios from 'axios';
import { useAuthStore } from '../store/auth';

export const authApi = axios.create({ baseURL: 'http://localhost:3000', withCredentials: true });

authApi.interceptors.request.use(config => {
  const { token } = useAuthStore.getState();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
