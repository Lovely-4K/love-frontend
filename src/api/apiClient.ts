import axios from 'axios';
import { getValueFromStorage } from './../utils/localStorage';

const apiClient = axios.create({
  baseURL: '/api',
});

apiClient.interceptors.request.use((config) => {
  const token = getValueFromStorage('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiClient;
