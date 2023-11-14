import axios from 'axios';

const apiClient = axios.create({ baseURL: 'https://love-back.kro.kr/v1' });

export default apiClient;
