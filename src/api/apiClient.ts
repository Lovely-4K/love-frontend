import axios from 'axios';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '~/constants';
import { getStoredData, setStoredData } from '~/utils/localStorage';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_END_POINT,
});

apiClient.interceptors.request.use((config) => {
  const token = getStoredData(ACCESS_TOKEN_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = getStoredData(REFRESH_TOKEN_KEY);

    if (
      refreshToken &&
      error.response.status === 400 &&
      error.response.data['메시지']
    ) {
      originalRequest.sent = true;

      try {
        const { data } = await axios.get(`${originalRequest.baseURL}couples`, {
          headers: {
            'Refresh-Token': refreshToken,
          },
        });
        setStoredData('accessToken', data.accessToken);

        return apiClient(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
