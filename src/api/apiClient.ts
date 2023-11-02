import axios from 'axios';

const apiClient = axios.create({ baseURL: 'http://43.201.122.97/v1' });

export default apiClient;
